import $api from "../http";

export default class ComputerService {
  static async createComputer(payload) {
    return $api.post("/api/computer", payload);
  }

  static async getAllComputers() {
    return $api.get("/api/computer/list");
  }

  static async getAllUserComputers(page, limit) {
    return $api.get(
      `/api/computer/user-computers/list?page=${page}&limit=${limit}`
    );
  }

  static async getAllUserComputersCount() {
    return $api.get("/api/computer/user-computers/count");
  }

  static async getAdminPublicComputersList(page, limit, search = "", type) {
    return $api.get(
      `/api/computer/admins-public/list?page=${page}&limit=${limit}&search=${search}&type=${type}`
    );
  }

  static async getUserPublicComputersList(page, limit, search = "", type) {
    return $api.get(
      `/api/computer/users-public/list?page=${page}&limit=${limit}&search=${search}&type=${type}`
    );
  }

  static async getComputerById(id) {
    return $api.get(`/api/computer/${id}`);
  }

  static async updateComputer(id, payload) {
    return $api.patch(`/api/computer/${id}`, payload);
  }

  static async deleteComputer(id) {
    return $api.delete(`/api/computer/${id}`);
  }
}
