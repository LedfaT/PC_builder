import { WaterCoolingSystem } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import WaterCoolingSystemCreate, {
  TWaterCoolingSystemUpdate,
} from "@models/in/waterCoolingSystem";
import WaterCoolingSystemOut from "@models/out/waterCoolingSystem";

@injectable()
class WaterCoolingSystemService {
  async create(wcs: WaterCoolingSystemCreate): Promise<void> {
    const existing = await client.waterCoolingSystem.findFirst({
      where: { title: wcs.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Water cooling system with title "${wcs.title}" already exists`
      );
    }

    await client.waterCoolingSystem.create({
      data: { ...wcs },
    });
  }

  async getAllWaterCoolingSystems(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: WaterCoolingSystemOut[];
  }> {
    const { page = 1, limit = 12, search, cost } = params;
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.title = {
        contains: search,
        mode: "insensitive",
      };
    }

    if (typeof cost === "number") {
      where.cost = cost;
    }

    const [count, rows] = await Promise.all([
      client.waterCoolingSystem.count({ where }),
      client.waterCoolingSystem.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((w) => new WaterCoolingSystemOut(w)),
    };
  }

  async getWaterCoolingSystemById(id: number): Promise<WaterCoolingSystemOut> {
    const wcs = await client.waterCoolingSystem.findUnique({
      where: { id },
    });

    if (!wcs) {
      throw ApiError.BadRequest(
        "There is no water cooling system with such ID"
      );
    }

    return new WaterCoolingSystemOut(wcs);
  }

  async update(
    id: number,
    data: TWaterCoolingSystemUpdate
  ): Promise<WaterCoolingSystem> {
    const existing = await client.waterCoolingSystem.findUnique({
      where: { id },
    });

    if (!existing) {
      throw ApiError.BadRequest("Water cooling system not found");
    }

    const duplicate = await client.waterCoolingSystem.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Water cooling system with title "${data.title}" already exists`
      );
    }

    return client.waterCoolingSystem.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<WaterCoolingSystem> {
    const wcs = await client.waterCoolingSystem.findUnique({
      where: { id },
    });

    if (!wcs) {
      throw ApiError.BadRequest("Water cooling system not found");
    }

    return client.waterCoolingSystem.delete({
      where: { id },
    });
  }
}

export default WaterCoolingSystemService;
