import { RAM } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import RamCreate, { TRamUpdate } from "@models/in/ram";
import RamOut from "@models/out/ram";

@injectable()
class RamService {
  async create(ram: RamCreate): Promise<void> {
    const existing = await client.rAM.findFirst({
      where: { title: ram.title },
    });

    if (existing) {
      throw ApiError.BadRequest(`RAM with title "${ram.title}" already exists`);
    }

    await client.rAM.create({
      data: { ...ram },
    });
  }

  async getAllRams(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: RamOut[];
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
      client.rAM.count({ where }),
      client.rAM.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((r) => new RamOut(r)),
    };
  }

  async getRamById(id: number): Promise<RamOut> {
    const ram = await client.rAM.findUnique({
      where: { id },
    });

    if (!ram) {
      throw ApiError.BadRequest("There is no RAM with such ID");
    }

    return new RamOut(ram);
  }

  async update(id: number, data: TRamUpdate): Promise<RAM> {
    const existing = await client.rAM.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("RAM not found");
    }

    const duplicate = await client.rAM.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `RAM with title "${data.title}" already exists`
      );
    }

    return client.rAM.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<RAM> {
    const ram = await client.rAM.findUnique({ where: { id } });

    if (!ram) {
      throw ApiError.BadRequest("RAM not found");
    }

    return client.rAM.delete({
      where: { id },
    });
  }
}

export default RamService;
