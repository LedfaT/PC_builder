import axios from "axios";

export const API_URL = "http://localhost:8080";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  config.headers.Authorization = `Bearer ${userData.accessToken}`;
  return config;
});

export default $api;
