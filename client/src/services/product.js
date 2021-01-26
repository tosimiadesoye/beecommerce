import axios from "axios";

const getProduct = () => {
  const API_URI = "http://localhost:5000/api/product";
  return axios.get(API_URI);
};

const findMakeup = (value) => {
  const CATEGORY_URI = `http://localhost:5000/api/description?keyword=${value}`;
  return axios.get(CATEGORY_URI);
};

const getLayoutProduct = () => {
const API_URI = "http://localhost:5000/api/product/layout/1/product_type?keyword=nail_polish"
    // 'http://localhost:5000/api/product/100'
  return axios.get(API_URI)
}

const getLayoutProductForMascara = () => {
  const API_URI = 'http://localhost:5000/api/product/layout/10/product_type?keyword=mascara'
  return axios.get(API_URI)
}

const getLayoutProductForBronzer = () => {
  const API_URI = 'http://localhost:5000/api/product/layout/5/product_type?keyword=bronzer'
  return axios.get(API_URI)
}


const postContact = (name, email, message) => {
  const API_URI="http://localhost:5000/api/contact"
  return axios.post(API_URI, {
    name,email,message
  })
}
export {
  getProduct,
  findMakeup,
  getLayoutProduct,
  getLayoutProductForBronzer,
  getLayoutProductForMascara,
  postContact
};
