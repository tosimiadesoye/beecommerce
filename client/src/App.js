import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './pages/NotFound' 
import Signup from "./pages/auth/Signup";
import {
  Homepage,
  ShopAllCardContainer,
  MakeupTypeCardContainer,
  Cart,
  ProductContentPagination,
  DisplayOnlyOneItem,
  Search,
  Checkout,
  Navigation,
  Contact,
} from "./components";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import axios from "axios";
import {
  getLayoutProductForNailPolish,
  getLayoutProductForBronzer,
  getProduct,
  getLayoutProductForMascara,
} from "./services/product";
import { dropdownList } from "./models/productArrays";

import "./App.css";

function App() {
  const makeupType = dropdownList;
  const [mascara, setMascara] = useState([]);
  const [product, setProduct] = useState([]);
  const [makeup_type, setMakeup_type] = useState([]);
  const [activePage, setCurrentPage] = useState(1);
  const [layoutProductForNailPolish, setLayoutProductForNailPolish] = useState([]);
  const [bronzer, setBronzer] = useState([]);
  const [similarProductItem, setSimilarProductItem] = useState([]);

  const displayedProductsPerPage = 9;

  const makeupProduct = async () => {
    const response = await getProduct();
    if (response) {
      setProduct(response.data.product);
    }
  };

  const layoutProduct = async () => {
    const response = await getLayoutProductForNailPolish();
    if (response) {
      setLayoutProductForNailPolish(response.data.product);
    }
  };

  const layoutProductForBronzer = async () => {
    const response = await getLayoutProductForBronzer();
    if (response) {
      setBronzer(response.data.product);
    }
  };

  // eslint-disable-next-line
  const similarProduct = async (type) => {
    await axios
      .get(`http://localhost:5000/api/product/1/product_type?keyword=${type}`)
      .then((res) => {
        if (res) {
          setSimilarProductItem(res.data.product);
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
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
        price_sign: makeup.price_sign,
currency: makeup.currency
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
                <Navigation makeupType={makeupType} />

                <Homepage
                  product={parseProducts(layoutProductForNailPolish)}
                  layoutProductForBronzer={layoutProductForBronzer}
                  layoutProductForMascara={layoutProductForMascara}
                  bronzer={parseProducts(bronzer)}
                  layoutProduct={layoutProduct}
                  mascara={parseProducts(mascara)}
                />
              </>
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => (
              <>
                <Navigation makeupType={makeupType} />
                <Cart />
              </>
            )}
          />
          <Route
            exact
            path="/shop"
            render={() => (
              <>
                <Navigation
                  makeupType={makeupType}
                  product={parseProducts(product)}
                />
                <Search searchProduct={setProduct} />
                <ShopAllCardContainer
                  product={parseProducts(currentProduct)}
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
                <Navigation makeupType={makeupType} />
                <Signup />
              </>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <>
                <Navigation makeupType={makeupType} />
                <Login />
              </>
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => (
              <>
                <Navigation makeupType={makeupType} />
                <Profile />
              </>
            )}
          />

          <Route
            exact
            path="/type/:slug"
            render={({ match }) => (
              <>
                <Navigation makeupType={makeupType} />
                <Search searchProduct={setMakeup_type} />
                <MakeupTypeCardContainer
                  {...match}
                  makeup_type={parseProducts(makeup_type)}
                  productType={productType}
                  makeupType={makeupType}
                />
              </>
            )}
          />

          <Route
            exact
            path={`/:slug/:_id`}
            render={() => (
              <>
                <Navigation makeupType={makeupType} />
                <DisplayOnlyOneItem
                  similarProductItem={parseProducts(similarProductItem)}
                  similarProduct={similarProduct}
                />
              </>
            )}
          />

          <Route
            exact
            path={"/checkout"}
            render={() => (
              <>
                <Navigation makeupType={makeupType} />
                <Checkout />
              </>
            )}
          />

          <Route
            exact
            path={"/contact"}
            render={() => (
              <>
                <Navigation makeupType={makeupType} />
                <Contact />
              </>
            )}
          />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
