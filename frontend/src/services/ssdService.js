import $api from "../http";

export default class SsdService {
  static async createSsd(payload) {
    return $api.post("/api/SSD", payload);
  }

  static async getAllSsds(page, limit, search = "") {
    return $api.get(
      `/api/SSD/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getSsdById(id) {
    return $api.get(`/api/SSD/${id}`);
  }

  static async updateSsd(id, payload) {
    return $api.patch(`/api/SSD/${id}`, payload);
  }

  static async deleteSsd(id) {
    return $api.delete(`/api/SSD/${id}`);
  }
}
