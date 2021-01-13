import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import {
  Layout,
  ShopAllCardContainer,
  MakeupTypeCardContainer,
  Cart,
  ProductContentPagination,
  DisplayOnlyOneItem,
  Search,
  Checkout,
  Navigation,
} from "./components";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import axios from "axios";
import { getLayoutProduct, getLayoutProductForBronzer, getProduct,getLayoutProductForMascara } from "./services/product";

import { dropdownList } from "./models/productArrays";

import Contact from "./pages/contact/Contact";
import "./App.css";

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
  const [total, setTotal] = useState("0");
  const displayedProductsPerPage = 9;

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
    <div className="fonts">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={["/", "/home"]}
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                />

                <Layout
                  product={parseProducts(productForLayout)}
                  layoutProductForBronzer={layoutProductForBronzer}
                  layoutProductForMascara={layoutProductForMascara}
                  bronzer={parseProducts(bronzer)}
                  layoutProduct={layoutProduct}
                  mascara={mascara}
                />
              </>
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                />
                <Cart
                  cart={cart}
                  setCart={setCart}
                  total={total}
                  setTotal={setTotal}
                />
              </>
            )}
          />
          <Route
            exact
            path="/shop"
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  product={parseProducts(product)}
                  setProduct={setProduct}
                />
                <Search searchProduct={setProduct} />
                <ShopAllCardContainer
                  product={parseProducts(currentProduct)}
                  setProduct={setProduct}
                  makeupProduct={makeupProduct}
                />

                <ProductContentPagination
                  product={parseProducts(product)}
                  activePage={activePage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            )}
          />

          <Route
            exact
            path="/signup"
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                />
                <Signup />
              </>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                />
                <Login />
              </>
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                />
                <Profile />
              </>
            )}
          />

          <Route
            exact
            path="/type/:slug"
            render={({ match }) => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  setType={setType}
                />
                <Search searchProduct={setMakeup_type} />
                <MakeupTypeCardContainer
                  {...match}
                  setMakeup_type={setMakeup_type}
                  makeup_type={parseProducts(makeup_type)}
                  productType={productType}
                  type={type}
                />
              </>
            )}
          />

          <Route
            exact
            path={`/:slug/:_id`}
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  setType={setType}
                />
                <DisplayOnlyOneItem />
              </>
            )}
          />

          <Route
            exact
            path={"/checkout"}
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  setType={setType}
                />
                <Checkout />
              </>
            )}
          />

          <Route
            exact
            path={"/contact"}
            render={() => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  setType={setType}
                />
                <Contact />
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
