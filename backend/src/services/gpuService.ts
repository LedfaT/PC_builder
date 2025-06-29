import { GPU } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import GpuCreate, { TGpuUpdate } from "@models/in/gpu";
import GpuOut from "@models/out/gpu";

@injectable()
class GpuService {
  async create(gpu: GpuCreate): Promise<void> {
    const existing = await client.gPU.findFirst({
      where: { title: gpu.title },
    });

    if (existing) {
      throw ApiError.BadRequest(`GPU with title "${gpu.title}" already exists`);
    }

    await client.gPU.create({
      data: { ...gpu },
    });
  }

  async getAllGpus(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: GpuOut[];
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
      client.gPU.count({ where }),
      client.gPU.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((g) => new GpuOut(g)),
    };
  }

  async getGpuById(id: number): Promise<GpuOut> {
    const gpu = await client.gPU.findUnique({
      where: { id },
    });

    if (!gpu) {
      throw ApiError.BadRequest("There is no GPU with such ID");
    }

    return new GpuOut(gpu);
  }

  async update(id: number, data: TGpuUpdate): Promise<GPU> {
    const existing = await client.gPU.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("GPU not found");
    }

    const duplicate = await client.gPU.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `GPU with title "${data.title}" already exists`
      );
    }

    return client.gPU.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<GPU> {
    const gpu = await client.gPU.findUnique({ where: { id } });

    if (!gpu) {
      throw ApiError.BadRequest("GPU not found");
    }

    return client.gPU.delete({
      where: { id },
    });
  }
}

export default GpuService;
