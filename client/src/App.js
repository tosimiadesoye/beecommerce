import { useState } from "react";
import Navigation from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopCardContainer from "./pages/shop/ShopCardContainer";
import Signup from "./pages/auth/Signup";
import Layout from "./components/Layout";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import MakeupList from "./components/product-type/MakeupList";
import axios from "axios";
import MakeupService from "./services/product";
import Cart from "./pages/cart/Cart";
import data from "./models/makeup.json";
import { ProductContentPagination } from "./components/PaginationContent.js";
import IndividualItem from "./pages/shop/IndividualItem";
import Search from "./components/Search";
import "./App.css";

function App() {
  const [makeupType, setMakeupType] = useState(data);
  const [product, setProduct] = useState([]);
  const [makeup_type, setMakeup_type] = useState([]);
  const [type, setType] = useState([]);
  const [activePage, setCurrentPage] = useState(1);
  const displayedProductsPerPage = 9;
  

  const makeupProduct =  async() => {
    const response = await MakeupService.getProduct();
    if (response) {
      setProduct(response.data.product);
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
  // const currentMakeupType = makeup_type.slice(
  //   indexOfFirstProducts,
  //   indexOfLastProducts
  // );

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

                <Layout />
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
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  product={product}
                  setProduct={setProduct}
                />
                <Search searchProduct={setProduct} />
                <ShopCardContainer
                  product={currentProduct}
                  setProduct={setProduct}
                  makeupProduct={makeupProduct}
                
                />

                <ProductContentPagination
                  product={product}
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
                <MakeupList
                  {...match}
                  setMakeup_type={setMakeup_type}
                  makeup_type={makeup_type}
                  productType={productType}
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
                <IndividualItem  />
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
                <IndividualItem/>
              </>
            )}
          />
         

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <Switch>
         
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      <Switch> */
