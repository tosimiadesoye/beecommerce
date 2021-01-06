import axios from "axios";

const getProduct = () => {
  const API_URI = "http://localhost:5000/api/product";
  return axios.get(API_URI);
};

const findMakeup = (value) => {
  const CATEGORY_URI = `http://localhost:5000/api/category?keyword=${value}`;
  return axios.get(CATEGORY_URI);
};


export default {
  getProduct,
  findMakeup,
  
};
