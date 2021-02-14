import axios from "axios";

const port = process.env.REACT_APP_PRODUCTION || process.env.REACT_APP_DEVELOPMENT

const getProduct = () => {
  const API_URI = `${port}api/product`;
  return axios.get(API_URI);
};

const findMakeup = (value) => {
  const CATEGORY_URI = `${port}api/description?keyword=${value}`;
  return axios.get(CATEGORY_URI);
};

const getLayoutProductForNailPolish = () => {
  const API_URI = `${port}api/product/layout/1/product_type?keyword=nail_polish`;

  return axios.get(API_URI);
};

const getLayoutProductForMascara = () => {
  const API_URI = `${port}api/product/layout/10/product_type?keyword=mascara`;
  return axios.get(API_URI);
};

const getLayoutProductForBronzer = () => {
  const API_URI = `${port}api/product/layout/5/product_type?keyword=bronzer`;
  return axios.get(API_URI);
};

const postContact = (name, email, message) => {
  const API_URI = `${port}api/contact`;
  return axios.post(API_URI, {
    name,
    email,
    message,
  });
};
export {
  getProduct,
  findMakeup,
  getLayoutProductForNailPolish,
  getLayoutProductForBronzer,
  getLayoutProductForMascara,
  postContact,
  port
};
