import { CPU } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import CpuCreate, { TCpuUpdate } from "@models/in/cpu";
import CpuOut from "@models/out/cpu/cpuOut";

@injectable()
class CpuService {
  async create(cpu: CpuCreate): Promise<void> {
    const existing = await client.cPU.findFirst({
      where: { title: cpu.title },
    });

    if (existing) {
      throw ApiError.BadRequest(`CPU with title "${cpu.title}" already exists`);
    }

    await client.cPU.create({
      data: { ...cpu },
    });
  }

  async getAllCpus(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: CpuOut[];
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
      client.cPU.count({ where }),
      client.cPU.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((c) => new CpuOut(c)),
    };
  }

  async getCpuById(id: number): Promise<CpuOut> {
    const cpu = await client.cPU.findUnique({
      where: { id },
    });

    if (!cpu) {
      throw ApiError.BadRequest("There is no CPU with such ID");
    }

    return new CpuOut(cpu);
  }

  async update(id: number, data: TCpuUpdate): Promise<CPU> {
    const existing = await client.cPU.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("CPU not found");
    }

    const duplicate = await client.cPU.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `CPU with title "${data.title}" already exists`
      );
    }

    return client.cPU.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<CPU> {
    const cpu = await client.cPU.findUnique({ where: { id } });

    if (!cpu) {
      throw ApiError.BadRequest("CPU not found");
    }

    return client.cPU.delete({
      where: { id },
    });
  }
}

export default CpuService;
