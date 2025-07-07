import $api from "../http";

export default class WaterCoolingSystemService {
  static async createSystem(payload) {
    return $api.post("/api/water-cooling-system", payload);
  }

  static async getAllSystems(page, limit, search = "") {
    return $api.get(
      `/api/water-cooling-system/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getSystemById(id) {
    return $api.get(`/api/water-cooling-system/${id}`);
  }

  static async updateSystem(id, payload) {
    return $api.patch(`/api/water-cooling-system/${id}`, payload);
  }

  static async deleteSystem(id) {
    return $api.delete(`/api/water-cooling-system/${id}`);
  }
}
