import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const IndividualItem = () => {
  let location = useLocation();
  const item = location.state.itemData;
  const [shadeName, setShadeName] = useState();

  const addProductToCart = () => {
    let cartString = localStorage.getItem("cart");
    let cart = [];
    if (cartString) {
      cart = JSON.parse(cartString);
    }
    let quantity = 1;
    // let total = parseFloat(item.price)
    let price = parseFloat(item.price);
    let cartItem = cart.concat([item]);

    localStorage.setItem("cart", JSON.stringify(cartItem));
  };

  const showColor = (colorName) => {
    const exactMatch = item.product_colors.map(
      (item) => item.colour_name === colorName
    );
    if (exactMatch) {
      return item.product_colors.filter((item) => {
        console.log(item.colour_name);
        return <div>{item.colour_name}</div>;
      });
    }
  };

  return (
    <div className="container shadow  h-50 w-50 mt-10 ">
      <div key={location.key} className="flex flex-row place-content-center">
        <div>
          <img
            // style={{ width: "5rem" }}
            className="w-100"
            src={item.api_featured_image}
            alt={item.name}
          />
        </div>

        <div>
          <h2 className="mb-7">{`${item.brand} ${item.category}`}</h2>
          <h4 className="mb-7">{item.name}</h4>
          <h5 className="mb-7">{`£${item.price}`}</h5>

          {/* <button onClick={() => addToCart(item._id, 1)}>Add to bag</button> */}
          <div className="mb-7 space-x-1">
            {item.product_colors.map((color) => (
              <>
                <span
                  className="inline-block break-words w-8 hover:opacity-70"
                  style={{
                    backgroundColor: color.hex_value,
                    borderRadius: "10px",
                  }}
                  onClick={() => showColor(color.color_name)}
                >
                  &nbsp;
                </span>
                {/* <p>{color.colour_name}</p> */}
                {/* <select><p>{color.colour_name}</p></select> */}
              </>
            ))}
          </div>
          <button
            className=" shadow p-2 rounded-sm bg-blue-300 focus:ring-2"
            onClick={addProductToCart}
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualItem;
