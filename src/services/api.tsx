import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { store } from "../states/store";
import refresh from "./refresh";

interface AxiosRetry extends InternalAxiosRequestConfig {
  _retry: boolean;
}

const API = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const prevRequest = error.config as AxiosRetry;
    if (error.response?.status == 401 && !prevRequest?._retry) {
      prevRequest._retry = true;

      const newToken = await refresh();
      if (newToken) {
        prevRequest.headers = prevRequest.headers ?? {};
        prevRequest.headers.Authorization = `Bearer ${newToken}`;
        return API(prevRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
