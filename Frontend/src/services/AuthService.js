import $api from "../http";
export default class AuthService {
  static async login(email, password) {
    return $api.post("/api/auth/login", { email, password });
  }

  static async registration({ email, password, username, user_role = null }) {
    return $api.post("/api/auth/registration", {
      email,
      password,
      username,
      user_role,
    });
  }

  static async logout() {
    return $api.post("/api/auth/logout");
  }
}
