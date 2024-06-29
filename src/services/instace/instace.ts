import axios from "axios";

export const instace = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});