import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}` },
});

export default axiosInstance;
