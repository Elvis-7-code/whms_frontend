import axios from "axios";

// Create an axios instance with your backend base URL
const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api", // all endpoints start with /api
});

// Attach JWT token to every request if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Changed to match AuthContext
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;