import axios from "axios";

/**
 * Return axios customized instance
 * @returns {axios}
 */
const baseService = () =>
  axios.create({
    baseURL: "http://localhost:8080",
    timeout: 1000,
    maxRedirects: 0,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS, HEAD",
    },
  });

export default baseService;
