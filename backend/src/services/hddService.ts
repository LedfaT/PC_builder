import { HDD } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import HddCreate, { THddUpate } from "@models/in/hdd";
import HddOut from "@models/out/hdd";

@injectable()
class HddService {
  async create(hdd: HddCreate): Promise<void> {
    const existing = await client.hDD.findFirst({
      where: { title: hdd.title },
    });

    if (existing) {
      throw ApiError.BadRequest(`HDD with title "${hdd.title}" already exists`);
    }

    await client.hDD.create({
      data: { ...hdd },
    });
  }

  async getAllHdds(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: HddOut[];
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
      client.hDD.count({ where }),
      client.hDD.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((h) => new HddOut(h)),
    };
  }

  async getHddById(id: number): Promise<HddOut> {
    const hdd = await client.hDD.findUnique({
      where: { id },
    });

    if (!hdd) {
      throw ApiError.BadRequest("There is no HDD with such ID");
    }

    return new HddOut(hdd);
  }

  async update(id: number, data: THddUpate): Promise<HDD> {
    const existing = await client.hDD.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("HDD not found");
    }

    const duplicate = await client.hDD.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `HDD with title "${data.title}" already exists`
      );
    }

    return client.hDD.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<HDD> {
    const hdd = await client.hDD.findUnique({ where: { id } });

    if (!hdd) {
      throw ApiError.BadRequest("HDD not found");
    }

    return client.hDD.delete({
      where: { id },
    });
  }
}

export default HddService;
