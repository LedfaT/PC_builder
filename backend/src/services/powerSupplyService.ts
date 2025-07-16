import { PowerSupply } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import PowerSupplyCreate, { TPowerSupplyUpdate } from "@models/in/powerSupply";
import PowerSupplyOut from "@models/out/powerSupply";

@injectable()
class PowerSupplyService {
  async create(psu: PowerSupplyCreate): Promise<void> {
    const existing = await client.powerSupply.findFirst({
      where: { title: psu.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Power supply with title "${psu.title}" already exists`
      );
    }

    await client.powerSupply.create({
      data: { ...psu },
    });
  }

  async getAllPowerSupplies(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: PowerSupplyOut[];
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
      client.powerSupply.count({ where }),
      client.powerSupply.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((p) => new PowerSupplyOut(p)),
    };
  }

  async getPowerSupplyById(id: number): Promise<PowerSupplyOut> {
    const psu = await client.powerSupply.findUnique({
      where: { id },
    });

    if (!psu) {
      throw ApiError.BadRequest("There is no power supply with such ID");
    }

    return new PowerSupplyOut(psu);
  }

  async update(id: number, data: TPowerSupplyUpdate): Promise<PowerSupply> {
    const existing = await client.powerSupply.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("Power supply not found");
    }

    const duplicate = await client.powerSupply.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Power supply with title "${data.title}" already exists`
      );
    }

    return client.powerSupply.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<PowerSupply> {
    const psu = await client.powerSupply.findUnique({ where: { id } });

    if (!psu) {
      throw ApiError.BadRequest("Power supply not found");
    }

    return client.powerSupply.delete({
      where: { id },
    });
  }
}

export default PowerSupplyService;
