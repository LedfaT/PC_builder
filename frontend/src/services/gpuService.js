import $api from "../http";

export default class GpuService {
  static async createGpu(payload) {
    return $api.post("/api/GPU", payload);
  }

  static async getAllGpus(page, limit, search = "") {
    return $api.get(
      `/api/GPU/list?page=${page}&limit=${limit}&search=${search}`
    );
  }

  static async getGpuById(id) {
    return $api.get(`/api/GPU/${id}`);
  }

  static async updateGpu(id, payload) {
    return $api.patch(`/api/GPU/${id}`, payload);
  }

  static async deleteGpu(id) {
    return $api.delete(`/api/GPU/${id}`);
  }
}
