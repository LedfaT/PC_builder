import { BluetoothModule } from "@prisma/client";
import client from "@database/index";
import BluetoothModuleOut from "@models/out/bluetoothModule/bluetoothModuleOut";
import ApiError from "@exeptions/api-error";
import BluetoothModuleCreate from "@models/in/bluetoothModule/bluetoothModuleCreate";
import { TBluetoothModuleUpdate } from "@models/in/bluetoothModule/bluetoothModuleCreate";

class BluetoothModuleService {
  async create(bluetooth: BluetoothModuleCreate): Promise<void> {
    const existing = await client.bluetoothModule.findFirst({
      where: { title: bluetooth.title },
    });

    if (existing) {
      throw ApiError.BadRequest(
        `Bluetooth module with title "${bluetooth.title}" already exists`
      );
    }

    await client.bluetoothModule.create({
      data: { ...bluetooth },
    });
  }

  async getAllBluetoothModules(params: {
    page?: number;
    limit?: number;
    search?: string;
    cost?: number;
  }): Promise<{
    meta: { count: number; totalPages: number };
    data: BluetoothModuleOut[];
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
      client.bluetoothModule.count({ where }),
      client.bluetoothModule.findMany({
        where,
        skip,
        take: limit,
        orderBy: { id: "asc" },
      }),
    ]);

    const totalPages = Math.ceil(count / limit);

    return {
      meta: { count, totalPages },
      data: rows.map((b) => new BluetoothModuleOut(b)),
    };
  }

  async getBluetoothModuleById(id: number): Promise<BluetoothModuleOut> {
    const bluerModule = await client.bluetoothModule.findUnique({
      where: { id },
    });

    if (!bluerModule) {
      throw ApiError.BadRequest("There are no bluetooth modules with such id");
    }

    return new BluetoothModuleOut(bluerModule);
  }

  async update(
    id: number,
    data: TBluetoothModuleUpdate
  ): Promise<BluetoothModule> {
    const existing = await client.bluetoothModule.findUnique({ where: { id } });
    if (!existing) {
      throw ApiError.BadRequest("Bluetooth module not found");
    }

    const duplicate = await client.bluetoothModule.findFirst({
      where: { title: data.title },
    });

    if (duplicate && duplicate.id !== id) {
      throw ApiError.BadRequest(
        `Bluetooth module with title "${data.title}" already exists`
      );
    }

    return client.bluetoothModule.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<BluetoothModule> {
    const module = await client.bluetoothModule.findUnique({ where: { id } });

    if (!module) {
      throw ApiError.BadRequest("Bluetooth module not found");
    }

    return client.bluetoothModule.delete({
      where: { id },
    });
  }
}

export default new BluetoothModuleService();
