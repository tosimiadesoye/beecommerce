import React, { useState } from "react";
import Routes from "./Routes";
import axios from "axios";
import {
  getLayoutProductForMascara,
  getLayoutProductForBronzer,
  getLayoutProduct,
  getProduct,
} from "./services/product";
import { dropdownList } from "./models/productArrays";

function App() {
  const [makeupType, setMakeupType] = useState(dropdownList);
  const [mascara, setMascara] = useState([]);
  const [product, setProduct] = useState([]);
  const [makeup_type, setMakeup_type] = useState([]);
  const [type, setType] = useState([]);
  const [activePage, setCurrentPage] = useState(1);
  const [productForLayout, setProductForLayout] = useState([]);
  const [bronzer, setBronzer] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const displayedProductsPerPage = 9;
  const [brand, setBrand] = useState([]);
  const makeupProduct = async () => {
    const response = await getProduct();
    if (response) {
      setProduct(response.data.product);
    }
  };

  const layoutProduct = async () => {
    const response = await getLayoutProduct();
    if (response) {
      setProductForLayout(response.data.product);
    }
  };

  const layoutProductForBronzer = async () => {
    const response = await getLayoutProductForBronzer();
    if (response) {
      setBronzer(response.data.product);
    }
  };

  const getProductBrand = async (item) => {
    return await axios
      .get(`localhost:5000/api/product/query?brand=${item}`)
      .then((res) => {
        if (res) {
          setBrand(res.data.product);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
    
  };
console.log(brand)
  const layoutProductForMascara = async () => {
    const response = await getLayoutProductForMascara();
    if (response) {
      setMascara(response.data.product);
    }
  };
  const productType = async (item) => {
    return await axios
      .get(`http://localhost:5000/api/product_type?keyword=${item}`)

      .then((res) => {
        if (res) {
          setMakeup_type(res.data.product);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  const indexOfLastProducts = activePage * displayedProductsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - displayedProductsPerPage;
  const currentProduct = product.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const parseProducts = (makeupData) => {
    return makeupData.map((makeup) => {
      return {
        api_featured_image: makeup.api_featured_image,
        price: makeup.price,
        name: makeup.name,
        id: makeup.id,
        product_colors: makeup.product_colors,
        _id: makeup._id,
        description: makeup.description,
        product_type: makeup.product_type,
        brand: makeup.brand,
        category: makeup.category,
        image_link: makeup.image_link,
        item_available: makeup.item_available,
      };
    });
  };

  return (
    <Routes
      makeupType={makeupType}
      setMakeupType={setMakeupType}
      parseProducts={parseProducts}
      productForLayout={productForLayout}
      layoutProductForBronzer={layoutProductForBronzer}
      layoutProductForMascara={layoutProductForMascara}
      bronzer={bronzer}
      layoutProduct={layoutProduct}
      setType={setType}
      setTotal={setTotal}
      cart={cart}
      setCart={setCart}
      mascara={mascara}
      setMascara={setMascara}
      total={total}
      product={product}
      setProduct={setProduct}
      currentProduct={currentProduct}
      activePage={activePage}
      makeupProduct={makeupProduct}
      setCurrentPage={setCurrentPage}
      makeup_type={makeup_type}
      type={type}
      productType={productType}
      brand={brand}
      setBrand={setBrand}
      getProductBrand={getProductBrand}
    />
  );
}

export default App;
