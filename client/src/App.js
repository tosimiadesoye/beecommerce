import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
  Contact
} from "./components";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import axios from "axios";
import {
  getLayoutProduct,
  getLayoutProductForBronzer,
  getProduct,
  getLayoutProductForMascara,
} from "./services/product";
import { dropdownList, type } from "./models/productArrays";

import "./App.css";

function App() {
  const makeupType = dropdownList;
  const [mascara, setMascara] = useState([]);
  const [product, setProduct] = useState([]);
  const [makeup_type, setMakeup_type] = useState([]);

  const [activePage, setCurrentPage] = useState(1);
  const [productForLayout, setProductForLayout] = useState([]);
  const [bronzer, setBronzer] = useState([]);
  const [similarItem, setSimilarItem] = useState([]);

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

  const similarProduct = () => {
    type.map(async (type) => {
      await axios
        .get(`http://localhost:5000/api/product/1/product_type?keyword=${type}`)
        .then((res) => {
          if (res) {
            setSimilarItem(res.data.product);
          }
        })
        .catch((error) => {
          console.log("error: ", error);
        });
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
                  product={parseProducts(productForLayout)}
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
                  similarItem={parseProducts(similarItem)}
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
