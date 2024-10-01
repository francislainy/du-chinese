import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  auth: {
    username: "john",
    password: "password1",
  },
});

const getLessons = async () => {
  return await axiosInstance.get("/lessons");
};

const getLesson = async (id: string) => {
  return await axiosInstance.get(`/lessons/${id}`);
};

const favouriteLesson = async (lessonId: string) => {
  return await axiosInstance.post(`/users/favourite/${lessonId}`);
};

const unfavouriteLesson = async (lessonId: string) => {
  return await axiosInstance.post(`/users/unfavourite/${lessonId}`);
};

const readLesson = async (lessonId: string) => {
  return await axiosInstance.post(`/users/read/${lessonId}`);
};

const unreadLesson = async (lessonId: string) => {
  return await axiosInstance.post(`/users/unread/${lessonId}`);
};

const login = async (username: string, password: string) => {
  return await axiosInstance.post("/auth/login", { username, password });
};

const register = async (username: string, password: string) => {
  return await axiosInstance.post("/auth/register", { username, password });
};

export {
  getLessons,
  getLesson,
  favouriteLesson,
  unfavouriteLesson,
  readLesson,
  unreadLesson,
  login,
  register,
};
