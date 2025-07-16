import AuthService from "@services/AuthService";
import axios from "axios";
import { API_URL } from "../http";

export default class Store {
  getData() {
    return JSON.parse(localStorage.getItem("userData"));
  }

  setData(data) {
    return localStorage.setItem("userData", JSON.stringify(data));
  }

  async login({ email, password }) {
    try {
      const res = await AuthService.login(email, password);

      const userData = res.data;
      userData.isAuth = true;

      this.setData(userData);
      return res;
    } catch (e) {
      throw e;
    } finally {
    }
  }

  async registration(payload) {
    try {
      const res = await AuthService.registration(payload);

      const userData = res.data;
      userData.isAuth = true;

      this.setData(userData);

      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      const res = await AuthService.logout();
      localStorage.removeItem("userData");
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get(`${API_URL}/refresh`);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
