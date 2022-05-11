import axios from "axios";

export const client = axios.create({
  baseURL: "https://luvshort.tk",
  withCredentials: true,
});
