import axios, { AxiosInstance, AxiosStatic } from "axios";
import Cookies from "js-cookie";
const api_url = (process.env.API_URL ?? "http://127.0.0.1:8000/") + "api/v1";

export const publicInstance = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const privateInstance: AxiosInstance = axios.create({
  baseURL: api_url,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});
privateInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get(process.env.NEXT_PUBLIC_TOKEN_NAME ?? "token");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      Cookies.remove(process.env.NEXT_PUBLIC_TOKEN_NAME ?? "token");
    }
    return Promise.reject(error);
  },
);

export const updatePrivateAxiosInstance = (token: string) => {
  privateInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
