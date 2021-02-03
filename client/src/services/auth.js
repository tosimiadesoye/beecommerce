import axios from "axios";
import { port } from "../services/product";
const register = (username, email, password) => {
  const API_URI = `${port}api/auth/signup/`;
  return axios.post(API_URI, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  const API_URI = `${port}api/auth/signin/`;

  return axios
    .post(API_URI, {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.email) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { register, login, logout, getCurrentUser };
