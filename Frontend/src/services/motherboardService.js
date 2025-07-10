import $api from "../http";

export default class MotherboardService {
  static async createMotherboard(payload) {
    return $api.post("/api/motherboard", payload);
  }

  static async getAllMotherboards(page, limit, search = "") {
    return $api.get(
      `/api/motherboard/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getMotherboardById(id) {
    return $api.get(`/api/motherboard/${id}`);
  }

  static async updateMotherboard(id, payload) {
    return $api.patch(`/api/motherboard/${id}`, payload);
  }

  static async deleteMotherboard(id) {
    return $api.delete(`/api/motherboard/${id}`);
  }
}
