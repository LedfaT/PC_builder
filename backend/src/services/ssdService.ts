import { SSD } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import SsdCreate, { TSsdUpdate } from "@models/in/ssd";
import SsdOut from "@models/out/ssd";

@injectable()
class SsdService {
  async create(ssd: SsdCreate): Promise<void> {
    const existing = await client.sSD.findFirst({
      where: { title: ssd.title },
    });

    if (existing) {
      throw ApiError.BadRequest(`SSD with title "${ssd.title}" already exists`);
    }

    await client.sSD.create({
      data: { ...ssd },
    });
  }

  async getAllSsds(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: SsdOut[];
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
      client.sSD.count({ where }),
      client.sSD.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((s) => new SsdOut(s)),
    };
  }

  async getSsdById(id: number): Promise<SsdOut> {
    const ssd = await client.sSD.findUnique({
      where: { id },
    });

    if (!ssd) {
      throw ApiError.BadRequest("There is no SSD with such ID");
    }

    return new SsdOut(ssd);
  }

  async update(id: number, data: TSsdUpdate): Promise<SSD> {
    const existing = await client.sSD.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("SSD not found");
    }

    const duplicate = await client.sSD.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `SSD with title "${data.title}" already exists`
      );
    }

    return client.sSD.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<SSD> {
    const ssd = await client.sSD.findUnique({ where: { id } });

    if (!ssd) {
      throw ApiError.BadRequest("SSD not found");
    }

    return client.sSD.delete({
      where: { id },
    });
  }
}

export default SsdService;
