import axios from "axios";

const getProduct = () => {
  const API_URI = "http://localhost:5000/api/product";
  return axios.get(API_URI);
};

const findMakeup = (value) => {
  const CATEGORY_URI = `http://localhost:5000/api/category?keyword=${value}`;
  return axios.get(CATEGORY_URI);
};

const getLayoutProduct = () => {
  const API_URI = 'http://localhost:5000/api/product/100'
  return axios.get(API_URI)
}

const getLayoutProductForBronzer = () => {
  const API_URI = 'http://localhost:5000/api/product/10/product_type?keyword=Bronzer'
  return axios.get(API_URI)
}

const getProductTagAndType = (tag, type) => {
  const API_URI = `http://localhost:5000/api/product/tag_list?brand=${tag}&type=${type}`
  return axios.get(API_URI)
}
export default {
  getProduct,
  findMakeup,
  getLayoutProduct,
  getLayoutProductForBronzer,
  getProductTagAndType
};
