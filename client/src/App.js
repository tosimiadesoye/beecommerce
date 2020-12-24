import { useState} from "react";
import Navigation from "./components/navbar/Navbar";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import ShopCardContainer from "./pages/shop/ShopCardContainer";
import Signup from "./pages/auth/Signup";
import Layout from "./components/Layout";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import BoardUser from "./pages/Board/BoardUser";
import MakeupList from "./components/product-type/MakeupList";
import axios from "axios";
import MakeupService from "./services/product";
import Cart from "./pages/Cart";
import data from "./models/makeup.json";
import './App.css'
function App() {
  const [makeupType, setMakeupType] = useState(data);
  const [product, setProduct] = useState([]);
  const [makeup_type, setMakeup_type] = useState([]);
  const [type, setType] = useState([]);

  const makeupProduct = async () => {
    const response = await MakeupService.getProduct();
    if (!response.error) {
      setProduct(response.data.product);
    }
  };

  const productType = async (item) => {
    return await axios
      .get(`http://localhost:5000/api/product_type?keyword=${item}`)
    
      .then((res) => {
        if (res) {
          console.log(res.data.product)
           setMakeup_type(res.data.product);
           
        }
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  debugger
  const addToCart = async (productId, quantity) => {
    return await MakeupService.postCart(productId, quantity)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className='fonts'>
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
          exact path='/cart'
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
                product={product} setProduct={setProduct}
              />
              <ShopCardContainer
                product={product}
                setProduct={setProduct}
                makeupProduct={makeupProduct}
                addToCart={addToCart}
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
              <MakeupList
                {...match}
                setMakeup_type={setMakeup_type}
                makeup_type={makeup_type}
                productType={productType}
                type={type}
                addToCart={addToCart}
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


  /* <Switch>
         
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      <Switch> */

