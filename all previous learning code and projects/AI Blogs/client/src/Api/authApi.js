import api from "./axiosConfig";

export const signUp = (data) => api.post("v1/auth/register", data);

export const login = (data) => api.post("v1/auth/login", data);

export const logout = () => api.post("v1/auth/logout");

export const getProfile = () => api.get("v1/auth/profile");