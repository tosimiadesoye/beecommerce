import { useState, useEffect } from "react";
import Navigation from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Signup from "./pages/auth/Signup";
import Layout from "./components/Layout";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import BoardUser from "./pages/Board/BoardUser";
import MakeupType from "./components/product-type/MakeupType";
import MakeupList from "./components/product-type/MakeupList";
import axios from "axios";
import Search from "./components/Search";
import authService from "./services/product";
import MakeupService from "./services/product";

import data from "./models/makeup.json";
function App() {
  const [makeupType, setMakeupType] = useState(data);
  const [product, setProduct] = useState("");
  const [product_type, setProduct_type] = useState("");

  const makeupProduct = async () => {
    const response = await MakeupService.getProduct();
    if (!response.error) {
      setProduct(response.data.items);
    }
  };

  const productType = async () => {

      makeupType.map((item) => {
       
      return  axios
          .get(`http://localhost:5000/api/product_type?keyword=${item}`)
          .then((res) => {
            if (!res.error) {
              console.log(res.data.data)
              setProduct_type(res.data.data);
            }
          })
          .catch((error) => {
            console.log("error: ", error);
          })
      });
    // return result;
  };
  return (
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
          path="/shop"
          render={() => (
            <>
               <Navigation
                setMakeupType={setMakeupType}
                makeupType={makeupType}
              />
              <Search product={product} setProduct={setProduct} />
              <Shop
                product={product}
                setProduct={setProduct}
                makeupProduct={makeupProduct}
              />
            </>
          )}
        />
        <Route
          path="/services"
          render={() => (
            <>
              <Navigation
                setMakeupType={setMakeupType}
                makeupType={makeupType}
              />
              <Services />
            </>
          )}
        />
        <Route
          path="/contact-us"
          render={() => (
            <>
              <Navigation
                setMakeupType={setMakeupType}
                makeupType={makeupType}
              />
              <Contact />
            </>
          )}
        />
        <Route
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
          path="/user"
          render={() => (
            <>
              <Navigation />
              <BoardUser />
            </>
          )}
        />
        <Route
          exact
          path="/mod"
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
          path="/admin"
          render={() => (
            <>
              <Navigation />
              <Profile />
            </>
          )}
        />

        <Route
          path="/:id"
          render={() => (
            <>
              <Navigation
                setMakeupType={setMakeupType}
                makeupType={makeupType}
              />
              <MakeupList
                makeupType={makeupType}
                setProduct_type={setProduct_type}
                product_type={product_type}
                productType={productType}
              />
            </>
          )}
        />

        {/* <Route
          exact
          path="/type"
          render={() => (
            <>
              <Navigation />
              <MakeupType
                setProduct_type={setProduct_type}
                product_type={product_type}
                productType={productType}
              />
            </>
          )}
        />  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Switch>
         
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      <Switch> */
}
