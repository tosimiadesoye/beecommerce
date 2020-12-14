import axios from "axios";

const getProduct = () => {
  const API_URI = "http://localhost:5000/api/product";
  return axios.get(API_URI);
};

const findMakeup = (value) => {
  const CATEGORY_URI = `http://localhost:5000/api/category?keyword=${value}`;
  return axios.get(CATEGORY_URI);
};

const CART_URL = 'http://localhost:5000/api/cart'
const postCart = (id, quantity) => {
  return axios.post(CART_URL, {
    id,
  quantity  
  }
  )
}

export default {
  getProduct,
  findMakeup,
  postCart
};
