import axios from "axios";

export const client = axios.create({
  baseURL: "http://13.209.236.146:8080",
  withCredentials: true,
});
