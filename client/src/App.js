import { useState } from "react";
import { Navigation } from "./components/navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  ShopAllCardContainer,
  MakeupTypeCardContainer,
} from "./components/shop-container";
import Signup from "./pages/auth/Signup";
import Layout from "./components/Layout";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import Checkout from "./components/Checkout";
import axios from "axios";
import MakeupService from "./services/product";
import Cart from "./pages/cart/Cart";
import { dropdownList } from "./models/productArrays";
import ProductContentPagination from "./components/PaginationContent.js";
import { DisplayOnlyOneItem } from "./components/product-card";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [makeupType, setMakeupType] = useState(dropdownList);
  const [tag_list, setTag_list] = useState([]);
  const [product, setProduct] = useState([]);
  const [makeup_type, setMakeup_type] = useState([]);
  const [type, setType] = useState([]);
  const [activePage, setCurrentPage] = useState(1);
  const [productForLayout, setProductForLayout] = useState([]);
  const [bronzer, setBronzer] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const displayedProductsPerPage = 9;

  const makeupProduct = async () => {
    const response = await MakeupService.getProduct();
    if (response) {
      setProduct(response.data.product);
    }
  };

  const layoutProduct = async () => {
    const response = await MakeupService.getLayoutProduct();
    if (response) {
      setProductForLayout(response.data.product);
    }
  };

  const layoutProductForBronzer = async () => {
    const response = await MakeupService.getLayoutProductForBronzer();
    if (response) {
      setBronzer(response.data.product);
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
  const getProductTagList = async (item) => {
    return await axios
      // .get(`localhost:5000/api/product/tag_list?keyword=${item}`)

      .get(`localhost:5000/api/product/query?brand=${item}`)

      .then((res) => {
        if (res) {
          console.log("tag list response");
          console.log(res);
          setTag_list(res);
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
                  bronzer={parseProducts(bronzer)}
                  layoutProduct={layoutProduct}
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
                  setMakeup_type={setTag_list}
                  makeup_type={parseProducts(tag_list)}
                  productType={getProductTagList}
                  type={type}
                />
              </>
            )}
          />
          <Route
            exact
            path={`/shop/:_id`}
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
                <Checkout

                />
              </>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
