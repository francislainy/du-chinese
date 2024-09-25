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
  // return await axiosInstance.post(`/lessons/${id}/save`);
  return await axiosInstance.post(`/users/favourite/${lessonId}`);
};

const unfavouriteLesson = async (lessonId: string) => {
  return await axiosInstance.post(`/users/unfavourite/${lessonId}`);
};

export { getLessons, getLesson, favouriteLesson, unfavouriteLesson };
