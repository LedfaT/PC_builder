import $api from "../http";

export default class PowerSupplyService {
  static async create(payload) {
    return $api.post("/api/power-supply", payload);
  }

  static async getAllSupplies(page, limit, search = "") {
    return $api.get(
      `/api/power-supply/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getById(id) {
    return $api.get(`/api/power-supply/${id}`);
  }

  static async update(id, payload) {
    return $api.patch(`/api/power-supply/${id}`, payload);
  }

  static async delete(id) {
    return $api.delete(`/api/power-supply/${id}`);
  }
}
