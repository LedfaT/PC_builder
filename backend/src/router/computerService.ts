import {
  PrismaClient,
  Computer as ComputerModel,
  Prisma,
} from "@prisma/client";
import ComputerOut from "../models/out/computer";
import ApiError from "../exeptions/api-error";

const prisma = new PrismaClient();

interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: string;
}

class ComputerService {
  async create(computerData: Omit<ComputerModel, "id">) {
    await prisma.computer.create({ data: computerData });
  }

  async getAllUserComputers(
    userId: number,
    { page = 1, limit = 4 }: PaginationParams
  ) {
    const offset = (page - 1) * limit;

    const [count, computers] = await Promise.all([
      prisma.computer.count({ where: { userId } }),
      prisma.computer.findMany({
        where: { userId },
        skip: offset,
        take: limit,
        include: this.defaultIncludes(),
      }),
    ]);

    const totalPages = Math.ceil(count / limit);
    const data = computers.map((comp) => new ComputerOut(comp));

    return { meta: { count, totalPages }, data };
  }

  async userComputersCount(userId: number) {
    return await prisma.computer.findMany({ where: { userId } });
  }

  async getAllComputers({ page = 1, limit = 12, search }: PaginationParams) {
    const offset = (page - 1) * limit;

    const where = search
      ? { title: { contains: search, mode: Prisma.QueryMode.insensitive } }
      : {};

    const [count, computers] = await Promise.all([
      prisma.computer.count({ where }),
      prisma.computer.findMany({
        where,
        skip: offset,
        take: limit,
        include: this.defaultIncludesWithUser(),
      }),
    ]);

    const totalPages = Math.ceil(count / limit);
    const data = computers.map((comp) => new ComputerOut(comp));

    return { meta: { count, totalPages }, data };
  }

  async adminPublicComputers({
    page = 1,
    limit = 12,
    search,
    type,
  }: PaginationParams) {
    const offset = (page - 1) * limit;

    const where: any = {
      isPublished: true,
      ...(search && { title: { contains: search, mode: "insensitive" } }),
      ...(type && { type }),
      user: { user_role: "ADMIN" },
    };

    const [count, computers] = await Promise.all([
      prisma.computer.count({ where }),
      prisma.computer.findMany({
        where,
        skip: offset,
        take: limit,
        include: this.defaultIncludesWithUser(),
      }),
    ]);

    const totalPages = Math.ceil(count / limit);
    const data = computers.map((comp) => new ComputerOut(comp));

    return { meta: { count, totalPages }, data };
  }

  async userPublicComputers({
    page = 1,
    limit = 12,
    search,
  }: PaginationParams) {
    const offset = (page - 1) * limit;

    const where: any = {
      isPublished: true,
      ...(search && { title: { contains: search, mode: "insensitive" } }),
      user: { user_role: "USER" },
    };

    const [count, computers] = await Promise.all([
      prisma.computer.count({ where }),
      prisma.computer.findMany({
        where,
        skip: offset,
        take: limit,
        include: this.defaultIncludesWithUser(),
      }),
    ]);

    const totalPages = Math.ceil(count / limit);
    const data = computers.map((comp) => new ComputerOut(comp));

    return { meta: { count, totalPages }, data };
  }

  async getComputerById(id: number) {
    const computer = await prisma.computer.findUnique({
      where: { id },
      include: this.defaultIncludesWithUser(),
    });

    if (!computer) {
      throw ApiError.BadRequest("Computer not found");
    }

    return new ComputerOut(computer);
  }

  async update(id: number, data: Partial<ComputerModel>) {
    const existing = await prisma.computer.findUnique({ where: { id } });
    if (!existing) {
      throw ApiError.BadRequest("Computer not found");
    }

    await prisma.computer.update({ where: { id }, data });
  }

  async delete(id: number) {
    const existing = await prisma.computer.findUnique({ where: { id } });
    if (!existing) {
      throw ApiError.BadRequest("Computer not found");
    }

    return await prisma.computer.delete({ where: { id } });
  }

  private defaultIncludes() {
    return {
      bluetoothModule: true,
      tower: true,
      coolingSystem: true,
      cpu: true,
      gpu: true,
      hdd: true,
      motherboard: true,
      powerSupply: true,
      ram: true,
      ssd: true,
      waterCoolingSystem: true,
      wifiModule: true,
    };
  }

  private defaultIncludesWithUser() {
    return {
      ...this.defaultIncludes(),
      user: true,
    };
  }
}

export default ComputerService;
