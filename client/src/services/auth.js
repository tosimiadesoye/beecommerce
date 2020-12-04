import axios from "axios";

const register = (username, email, password) => {
    const API_URI = 'http://localhost:5000/api/auth/signup/'
    return axios.post(API_URI, {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    const API_URI = 'http://localhost:5000/api/auth/signin/'
    
      
   return axios.post(API_URI, {
        username,
        password
      })
        .then(response => {
            console.log(response.data)
             if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data))
             }
            return response.data
        })
     
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export default {
    register,
    login,
    logout,
    getCurrentUser
}