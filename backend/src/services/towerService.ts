import { Tower } from "@prisma/client";
import client from "@database/index";
import ApiError from "@exeptions/api-error";
import DefaultParams from "@ownTypes/queryParams/defaultParams";
import { injectable } from "inversify";
import TowerCreate, { TTowerUpdate } from "@models/in/tower";
import TowerOut from "@models/out/tower";

@injectable()
class TowerService {
  async create(tower: TowerCreate): Promise<void> {
    const existing = await client.tower.findFirst({
      where: { title: tower.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Tower with title "${tower.title}" already exists`
      );
    }

    await client.tower.create({
      data: { ...tower },
    });
  }

  async getAllTowers(params: DefaultParams): Promise<{
    meta: { count: number; totalPages: number };
    data: TowerOut[];
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
      client.tower.count({ where }),
      client.tower.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((t) => new TowerOut(t)),
    };
  }

  async getTowerById(id: number): Promise<TowerOut> {
    const tower = await client.tower.findUnique({
      where: { id },
    });

    if (!tower) {
      throw ApiError.BadRequest("There is no tower with such ID");
    }

    return new TowerOut(tower);
  }

  async update(id: number, data: TTowerUpdate): Promise<Tower> {
    const existing = await client.tower.findUnique({ where: { id } });

    if (!existing) {
      throw ApiError.BadRequest("Tower not found");
    }

    const duplicate = await client.tower.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Tower with title "${data.title}" already exists`
      );
    }

    return client.tower.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Tower> {
    const tower = await client.tower.findUnique({ where: { id } });

    if (!tower) {
      throw ApiError.BadRequest("Tower not found");
    }

    return client.tower.delete({
      where: { id },
    });
  }
}

export default TowerService;
