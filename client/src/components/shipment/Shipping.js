import { useState, useEffect } from "react";
import { shippingPrices } from "../../models/productArrays";
import { Link } from "react-router-dom";

const Shipping = (props) => {
  const { total, cart, removeAllProductsInStorage, redirectToShopAll } = props;
  const [totalPlusShipping, setTotalPlusShipping] = useState(0);
  const [user, setUser] = useState(false);
  const checkStorageForUser = () => {
    if (localStorage.getItem("user") !== null) {
      setUser(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addTotalPlusShipping = (id) => {
    return shippingPrices.forEach((item) => {
      if (item.id === id) {
        setTotalPlusShipping(
          Math.round(item.price + parseFloat(total.addSubtotal))
        );
      }
    });
  };

  const redirectToLogin = () => {
    window.location.replace("/login");
  };
  useEffect(() => {
    checkStorageForUser();
  }, []);

  if (cart === null) return "";

  return (
    <>
      <div className="flex flex-row text-center">
        <form
          className="  container border border-box box-2 "
          onSubmit={handleSubmit}
        >
          <h2 className='text-5xl font-normal leading-normal mt-0 mb-2 '>Shipping method</h2>
          <p>Select the one you want</p>
          <div>
            {shippingPrices &&
              shippingPrices.map((item) => (
                <div key={item.price}>
                  <h4 className='text-3xl font-normal leading-normal mt-0 mb-2'>{item.method}</h4>
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    onClick={() => addTotalPlusShipping(item.id)}
                  />
                  <p>{`£${item.price > 0 ? item.price : "0.00"}`}</p>
                </div>
              ))}
          </div>

          <h4 className='text-3xl font-normal leading-normal mt-0 mb-2'>Coupon code</h4>

          <input
            placeholder="Enter your coupon code…"
            className="bg-gray-700 form-input p-3 mt-1 block w-full item-center"
            type="text"
          />
          <button className="bg-gray-300 rounded h-10 m-5 w-20 hover:opacity-70">
            apply
          </button>
          <div>
            <h4 className='text-3xl font-normal leading-normal mt-0 mb-2'>Total</h4>
            <h4 className='text-3xl font-normal leading-normal mt-0 mb-2'>{`£${totalPlusShipping}.00`}</h4>
          </div>

          <div>
            <button
              className="text-white shadow  bg-black shadow border border-solid
               border-white hover:bg-pink hover:text-black
                active:bg-white-600 font-bold uppercase text-sm px-6 py-3
                 rounded outline-none focus:outline-none mr-1 "
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={() => {
                removeAllProductsInStorage();
                redirectToShopAll();
              }}
            >
              Empty cart
            </button>{" "}
            {user ? (
              <>
                <Link
                 
                  to="/checkout"
                  onClick={() => removeAllProductsInStorage()}
                >
                <button  
                className="text-white shadow  bg-black shadow border border-solid border-white 
              hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
               text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 "
                  type="button"
                  style={{ transition: "all .15s ease" }} > Check out</button> 
                </Link>
              </>
            ) : (
              <>
                <button
                  className="text-white shadow  bg-black shadow border border-solid border-white 
              hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
               text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 "
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={() => redirectToLogin()}
                >
                  go to login
                </button>
                <div className="text-red-400 w-32 m-auto ">
                    <h4 className='text-3xl font-normal leading-normal mt-0 mb-2'>
                      Please login to continue to checkout</h4>
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
export default Shipping;
