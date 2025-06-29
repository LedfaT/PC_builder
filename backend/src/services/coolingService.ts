import { CoolingSystem } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import CoolingSystemCreate, {
  TCoolingSystemUpdate,
} from "@models/in/coolingSystem/coolingSystemCreate";
import CoolingSystemOut from "@models/out/coolingSystem";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";

injectable();
class CoolingSystemService {
  async create(cooling: CoolingSystemCreate): Promise<void> {
    const existing = await client.coolingSystem.findFirst({
      where: { title: cooling.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Cooling system with title "${cooling.title}" already exists`
      );
    }

    await client.coolingSystem.create({
      data: { ...cooling },
    });
  }

  async getAllCoolingSystems(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: CoolingSystemOut[];
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
      client.coolingSystem.count({ where }),
      client.coolingSystem.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((c) => new CoolingSystemOut(c)),
    };
  }

  async getCoolingSystemById(id: number): Promise<CoolingSystemOut> {
    const cooling = await client.coolingSystem.findUnique({
      where: { id },
    });

    if (!cooling) {
      throw ApiError.BadRequest("There are no cooling systems with such id");
    }

    return new CoolingSystemOut(cooling);
  }

  async update(id: number, data: TCoolingSystemUpdate): Promise<CoolingSystem> {
    const existing = await client.coolingSystem.findUnique({ where: { id } });
    if (!existing) {
      throw ApiError.BadRequest("Cooling system not found");
    }

    const duplicate = await client.coolingSystem.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Cooling system with title "${data.title}" already exists`
      );
    }

    return client.coolingSystem.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<CoolingSystem> {
    const system = await client.coolingSystem.findUnique({ where: { id } });

    if (!system) {
      throw ApiError.BadRequest("Cooling system not found");
    }

    return client.coolingSystem.delete({
      where: { id },
    });
  }
}

export default new CoolingSystemService();
