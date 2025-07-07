import $api from "../http";

export default class HddService {
  static async createHdd(payload) {
    return $api.post("/api/HDD", payload);
  }

  static async getAllHdds(page, limit, search = "") {
    return $api.get(
      `/api/HDD/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getHddById(id) {
    return $api.get(`/api/HDD/${id}`);
  }

  static async updateHdd(id, payload) {
    return $api.patch(`/api/HDD/${id}`, payload);
  }

  static async deleteHdd(id) {
    return $api.delete(`/api/HDD/${id}`);
  }
}
