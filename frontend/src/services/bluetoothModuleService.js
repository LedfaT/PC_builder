import $api from "../http";

export default class BluetoothModuleService {
  static async createBluetoothModule(payload) {
    return $api.post("/api/bluetooth-module", payload);
  }

  static async getAllBluetoothModules(page, limit, search = "") {
    return $api.get(
      `/api/bluetooth-module/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getBluetoothModule(id) {
    return $api.get(`/api/bluetooth-module/${id}`);
  }

  static async updateBluetoothModule(id, payload) {
    return $api.patch(`/api/bluetooth-module/${id}`, payload);
  }

  static async deleteBluetoothModule(id) {
    return $api.delete(`/api/bluetooth-module/${id}`);
  }
}
