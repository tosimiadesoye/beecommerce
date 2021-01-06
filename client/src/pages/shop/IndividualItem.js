import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const IndividualItem = () => {
  const [shadeName, setShadeName] = useState([]);
  const [popover, setPopover] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  let location = useLocation();
  const item = location.state.itemData;

  const addProductToCart = (productId, quantity, price) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let isAlreadyIn = false;
    let number;
    let subTotal = parseFloat(price);

    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i].productId._id === productId._id) {
        isAlreadyIn = true;
        number = i;
        break;
      }
    }
    if (isAlreadyIn) {
      cart[number].quantity = cart[number].quantity + quantity;
      cart[number].subTotal = cart[number].quantity * subTotal;
    } else {
      cart.push({
        productId: productId,
        quantity: quantity,
        subTotal: subTotal,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const changeColorName = (colorName) => {
    const name = item.product_colors.filter(
      (name) => name.colour_name === colorName
    );

    setShadeName(name);
  };

  const flash = (name) => {
    const nameOfItemAddedToCart = item.name === name;
    if (nameOfItemAddedToCart) {
      setPopover(`You added ${item.name} to cart`);
    }
  };

  const setTimer = () => {
    return setTimeout(() => setIsVisible(false), 5000);
  };
  useEffect(() => {
    setTimer();

  }, [setTimer()]);

  return (
    <div
      key={location.key}
      className="flex flex-col md:flex-row lg-flex-row 
        container text-center
        shadow items-center justify-center truncate space-x-0 md:space-x-10"
    >
      <div>
        <img
          // style={{ width: "15rem" }}
          className="w-20 md:w-60 "
          src={item.api_featured_image}
          alt={item.name}
        />
      </div>

      <div className="">
        <h2 className="mb-7">{`${item.brand} ${item.category}`}</h2>
        <h4 className="mb-7">{item.name}</h4>
        <h5 className="mb-7">{`£${item.price}`}</h5>

        <select className="mb-7 space-x-1 appearance-none select-none">
          {shadeName &&
            shadeName.map((color) => (
              <option key={color.colour_name}>{color.colour_name}</option>
            ))}
        </select>
        <div className="mb-7 space-x-1 flex flex-wrap gap-2">
          {item.product_colors.map((color) => (
            <>
              <button
                className="inline-block  w-3 hover:opacity-70"
                style={{
                  backgroundColor: color.hex_value,
                }}
                onClick={() => changeColorName(color.colour_name)}
              >
                &nbsp;
              </button>
            </>
          ))}
        </div>
        <div>
          <button
            className=" shadow p-2 rounded-sm bg-blue-300 focus:ring-2"
            onClick={() => {
              addProductToCart(item, 1, item.price);
              flash(item.name);
              setIsVisible(true);
            }}
          >
            Add to bag
          </button>
          {isVisible ? (
            <p
              // className='float-right shadow bg-pink-500 border border-black'
              className="
              bg-pink-300
            float-right   -600 font-bold
            text-black
              text-sm px-6 py-3 rounded border-blue border-2 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            >
              {popover}
            </p>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndividualItem;
