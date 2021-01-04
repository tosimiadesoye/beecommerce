import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const IndividualItem = () => {
  const [shadeName, setShadeName] = useState([]);
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

  return (
    <div className="container md:h-50 md:w-50 m mt-10 ">
      <div
        key={location.key}
        className="flex flex-row  shadow place-content-center justify-center truncate"
      >
        <div>
          <img
            style={{ width: "10rem" }}
            className=""
            src={item.api_featured_image}
            alt={item.name}
          />
        </div>

        <div>
          <h2 className="mb-7">{`${item.brand} ${item.category}`}</h2>
          <h4 className="mb-7">{item.name}</h4>
          <h5 className="mb-7">{`£${item.price}`}</h5>

          <select className="mb-7 space-x-1 appearance-none select-none">
            {shadeName &&
              shadeName.map((color) => (
                <>
                  
                    <option className=''>{color.colour_name}</option>
                  
                </>
              ))}
          </select>
          <div className="mb-7 space-x-1">
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
          <button
            className=" shadow p-2 rounded-sm bg-blue-300 focus:ring-2"
            onClick={() => addProductToCart(item, 1, item.price)}
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualItem;
