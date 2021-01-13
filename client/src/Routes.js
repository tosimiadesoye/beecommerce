import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Lognin";
import Profile from "./pages/user/Profile";
import {
  ProductContentPagination,
  Search,
  Checkout,
  Cart,
  Layout,
  DisplayOnlyOneItem,
  ShopAllCardContainer,
  MakeupTypeCardContainer,
  Navigation,
} from "./components";
import Contact from "./pages/Contact/Contact";
import "./Routes.css";

const Routes = (props) => {
  
  const {
    makeupType,
    setMakeupType,
    parseProducts,
    productForLayout,
    layoutProduct,
    setTotal,
    setType,
    setCart,
    cart,
    layoutProductForBronzer,
    layoutProductForMascara,
    bronzer,
    total,
    brand,
    setBrand,
    product,
    mascara,
    currentProduct,
    activePage,
    setProduct,
    setCurrentPage,
    setMakeup_type,
    type,
    makeup_type,
    makeupProduct,
    productType,
    getProductBrand,
  } = props;
  console.log(product)
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
            path="/type/:slug"
            render={({ match }) => (
              <>
                <Navigation
                  setMakeupType={setMakeupType}
                  makeupType={makeupType}
                  setType={setType}
                />
                <Search searchProduct={setBrand} />
                <MakeupTypeCardContainer
                  {...match}
                  setMakeup_type={setBrand}
                  makeup_type={parseProducts(brand)}
                  productType={getProductBrand}
                  type={type}
                />
              </>)}/>
          

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

export default Routes;
