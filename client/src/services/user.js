import axios from "axios";
import authHeader from './authHeader'

const API_URI = "http://localhost:5000/api/test/";

const getPublicContent =    () => {
    return axios.get(API_URI + 'all/', {
        headers: authHeader()
    });
};

const getUserBoard = () => {
    return axios.get(API_URI + 'user/', {
        headers: authHeader()
    });
}

const getModeratorBoard = () => {
    return axios.get(API_URI + "mod/", {
        headers: authHeader()
    })
}

const getAdminBoard = () => {
    return axios.get(API_URI + "admin", { headers: authHeader() });
};
  
export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
};