import { Motherboard } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import MotherboardCreate, { TMotherboardUpdate } from "@models/in/motherboard";
import MotherboardOut from "@models/out/motherboard";

@injectable()
class MotherboardService {
  async create(mb: MotherboardCreate): Promise<void> {
    const existing = await client.motherboard.findFirst({
      where: { title: mb.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Motherboard with title "${mb.title}" already exists`
      );
    }

    await client.motherboard.create({
      data: { ...mb },
    });
  }

  async getAllMotherboards(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: MotherboardOut[];
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
      client.motherboard.count({ where }),
      client.motherboard.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((m) => new MotherboardOut(m)),
    };
  }

  async getMotherboardById(id: number): Promise<MotherboardOut> {
    const mb = await client.motherboard.findUnique({
      where: { id },
    });

    if (!mb) {
      throw ApiError.BadRequest("There is no motherboard with such ID");
    }

    return new MotherboardOut(mb);
  }

  async update(id: number, data: TMotherboardUpdate): Promise<Motherboard> {
    const existing = await client.motherboard.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("Motherboard not found");
    }

    const duplicate = await client.motherboard.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Motherboard with title "${data.title}" already exists`
      );
    }

    return client.motherboard.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Motherboard> {
    const mb = await client.motherboard.findUnique({ where: { id } });

    if (!mb) {
      throw ApiError.BadRequest("Motherboard not found");
    }

    return client.motherboard.delete({
      where: { id },
    });
  }
}

export default MotherboardService;
