// utils/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com', // Base URL default
  timeout: 10000, // Timeout 10 detik
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Ambil token dari localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Tambahkan token ke header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response.data; // Return data saja dari response
  },
  (error) => {
    // Tangani error global, seperti refresh token, dll.

    return Promise.reject(error);
  }
);

export default api;
