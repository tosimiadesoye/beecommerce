import axios from 'axios'

const getProduct = () => {
    const API_URI = 'http://localhost:5000/api/product' 
      return axios.get(API_URI)  
}

const PRODUCT_URI = 'http://localhost:5000/api/product_type?keyword='

const findMakeup = (value) => {
    const CATEGORY_URI = `http://localhost:5000/api/category?keyword=${value}`
    return axios.get(CATEGORY_URI)
}

const getBlush = () => {
    return axios.get(PRODUCT_URI + 'blush')
}

const getBronzer = () => {
    return axios.get(PRODUCT_URI + 'bronzer')
}

const getEyebrow = () => {
    return axios.get(PRODUCT_URI + 'eyebrow')
}

const getEyeliner= () => {
    return axios.get(PRODUCT_URI + 'eyeliner')
}
const getEyeshadow= () => {
    return axios.get(PRODUCT_URI + 'eyeshadow')
}
const getFoundation= () => {
    return axios.get(PRODUCT_URI + 'foundation')
}
const getLipLiner= () => {
    return axios.get(PRODUCT_URI + 'lip_liner')
}
const getLipstick= () => {
    return axios.get(PRODUCT_URI + 'lipstick')
}

const getMascara= () => {
    return axios.get(PRODUCT_URI + 'mascara')
}
const getNailPolish= () => {
    return axios.get(PRODUCT_URI + 'nail_polish')
}
export default {
    getProduct,
    findMakeup,
    getBlush,
    getBronzer,
    getEyebrow,
    getEyeliner,
    getEyeshadow,
    getFoundation,
    getLipLiner,
    getLipstick,
    getMascara,
    getNailPolish
}