import axios from "axios";

export const api = axios.create({
  baseURL: "https://clientforce-api-nestjs.onrender.com",
  timeout: 15000,
});
