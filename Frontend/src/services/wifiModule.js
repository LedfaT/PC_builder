import $api from "../http";

export default class WifiModuleService {
  static async createWifiModule(payload) {
    return $api.post("/api/wifi-module", payload);
  }

  static async getAllWifiModules(page, limit, search = "") {
    return $api.get(
      `/api/wifi-module/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getWifiModuleById(id) {
    return $api.get(`/api/wifi-module/${id}`);
  }

  static async updateWifiModule(id, payload) {
    return $api.patch(`/api/wifi-module/${id}`, payload);
  }

  static async deleteWifiModule(id) {
    return $api.delete(`/api/wifi-module/${id}`);
  }
}
