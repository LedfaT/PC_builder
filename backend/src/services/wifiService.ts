import { WifiModule } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import WifiModuleCreate, { TWifiModuleUpdate } from "@models/in/wifiModule";
import WifiModuleOut from "@models/out/wifiModule";

@injectable()
class WifiModuleService {
  async create(wifi: WifiModuleCreate): Promise<void> {
    const existing = await client.wifiModule.findFirst({
      where: { title: wifi.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Wi-Fi module with title "${wifi.title}" already exists`
      );
    }

    await client.wifiModule.create({
      data: { ...wifi },
    });
  }

  async getAllWifiModules(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: WifiModuleOut[];
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
      client.wifiModule.count({ where }),
      client.wifiModule.findMany({
        where,
        skip,
        take: +limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((w) => new WifiModuleOut(w)),
    };
  }

  async getWifiModuleById(id: number): Promise<WifiModuleOut> {
    const wifi = await client.wifiModule.findUnique({
      where: { id },
    });

    if (!wifi) {
      throw ApiError.BadRequest("There is no Wi-Fi module with such ID");
    }

    return new WifiModuleOut(wifi);
  }

  async update(id: number, data: TWifiModuleUpdate): Promise<WifiModule> {
    const existing = await client.wifiModule.findUnique({
      where: { id },
    });

    if (!existing) {
      throw ApiError.BadRequest("Wi-Fi module not found");
    }

    const duplicate = await client.wifiModule.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Wi-Fi module with title "${data.title}" already exists`
      );
    }

    return client.wifiModule.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<WifiModule> {
    const wifi = await client.wifiModule.findUnique({
      where: { id },
    });

    if (!wifi) {
      throw ApiError.BadRequest("Wi-Fi module not found");
    }

    return client.wifiModule.delete({
      where: { id },
    });
  }
}

export default WifiModuleService;
