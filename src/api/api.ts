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

export { getLessons };
