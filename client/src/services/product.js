import axios from "axios";

const getProduct = () => {
  const API_URI = "http://localhost:5000/api/product/1";
  return axios.get(API_URI);
};

const findMakeup = (value) => {
  const CATEGORY_URI = `http://localhost:5000/api/category?keyword=${value}`;
  return axios.get(CATEGORY_URI);
};

const CART_URL = "http://localhost:5000/api/cart";
const postCart = (productId, quantity) => {
  return axios.post(CART_URL, {
    productId,
    quantity,
  });
};

const getCart = () => {
  return axios.get(CART_URL)
}

const emptyCart = () => {
  return axios.delete(CART_URL)
}
export default {
  getProduct,
  findMakeup,
  postCart,
  getCart,
  emptyCart
};
