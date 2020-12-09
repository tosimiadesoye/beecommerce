import axios from 'axios'

const API_URI = 'http://localhost:5000/api/product' 

const getProduct =  () => {
      return axios.get(API_URI)  
}

export default {
    getProduct
}