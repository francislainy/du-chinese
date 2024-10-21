import axios from "axios";

// Create an axios instance for unauthenticated requests (e.g., login, register)
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

// Create an authenticated axios instance for logged-in requests
const createAuthenticatedInstance = (username: string, password: string) => {
  return axios.create({
    baseURL: "http://localhost:8080/api/v1",
    auth: {
      username,
      password,
    },
  });
};

// Unauthenticated APIs
export const login = async (username: string, password: string) => {
  return await axiosInstance.post("/auth/login", { username, password });
};

export const register = async (username: string, password: string) => {
  return await axiosInstance.post("/auth/register", { username, password });
};

// Authenticated APIs
export const getLessons = async (username: string, password: string) => {
  const axiosInstance = createAuthenticatedInstance(username, password);
  return await axiosInstance.get("/lessons");
};

export const getLesson = async (
  id: string,
  username: string,
  password: string,
) => {
  const axiosInstance = createAuthenticatedInstance(username, password);
  return await axiosInstance.get(`/lessons/${id}`);
};

export const favouriteLesson = async (
  lessonId: string,
  username: string,
  password: string,
) => {
  const axiosInstance = createAuthenticatedInstance(username, password);
  return await axiosInstance.post(`/users/favourite/${lessonId}`);
};

export const unfavouriteLesson = async (
  lessonId: string,
  username: string,
  password: string,
) => {
  const axiosInstance = createAuthenticatedInstance(username, password);
  return await axiosInstance.post(`/users/unfavourite/${lessonId}`);
};

export const readLesson = async (
  lessonId: string,
  username: string,
  password: string,
) => {
  const axiosInstance = createAuthenticatedInstance(username, password);
  return await axiosInstance.post(`/users/read/${lessonId}`);
};

export const unreadLesson = async (
  lessonId: string,
  username: string,
  password: string,
) => {
  const axiosInstance = createAuthenticatedInstance(username, password);
  return await axiosInstance.post(`/users/unread/${lessonId}`);
};
