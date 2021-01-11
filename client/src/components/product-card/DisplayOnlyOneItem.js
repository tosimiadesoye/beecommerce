import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faAngleDown);

const DisplayOnlyOneItem = () => {
  const [shadeName, setShadeName] = useState([]);
  const [popover, setPopover] = useState([]);
  const [cartAlertPopoverIsVisible, setCartAlertPopoverIsVisible] = useState(
    false
  );
  const [showShowDescription, setShowShowDescription] = useState(false);
  const [expandDescription, setExpandDescription] = useState("");
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

  const handleExpandDescription = (description) => {
    if (description === item.description) {
      setExpandDescription(description);
    } else {
      setExpandDescription();
    }
  };

  const changeColorName = (colorName) => {
    const name = item.product_colors.filter(
      (name) => name.colour_name === colorName
    );

    setShadeName(name);
  };

  const flashCard = (name) => {
    const nameOfItemAddedToCart = item.name === name;
    if (nameOfItemAddedToCart) {
      setPopover(`You added ${item.name} to cart`);
    }
  };

  const setTimer = () => {
    return setTimeout(() => setCartAlertPopoverIsVisible(false), 5000);
  };
  useEffect(() => {
    setTimer();
  }, [setTimer()]);

  return (
    <>
      <div
        key={location.key}
        className="flex flex-col md:flex-row lg-flex-row 
         bg-gray-300
           container text-center
          shadow items-center justify-center space-x-0 md:space-x-10
          "
      >
        <div className="w-20 md:w-60 flex text-black">
          <AliceCarousel
            autoPlay
            autoPlayInterval="4000"
            autoPlayStrategy="default"
            disableButtonsControls="true"
            infinite
          >
            <img src={item.api_featured_image} alt={item.name} />
            <img src={item.image_link} alt={item.name} />
          </AliceCarousel>
        </div>

        <div className="mt-5">
          <div>
            <h2 className="mb-7">{`${item.brand} ${item.category}`}</h2>
            <div className="mb-7">
              {item.item_available === 0 ? (
                <h5 className="text-red-500">Out of Stock</h5>
              ) : (
                <h5>In Stock</h5>
              )}
            </div>
            <h4 className="mb-7">{item.name}</h4>
            <h5 className="mb-7">{`£${item.price}`}</h5>
            <div
              className="mb-7"
              onClick={() => {
                handleExpandDescription(item.description);
                setShowShowDescription(!showShowDescription);
              }}
            >
              Description
              <FontAwesomeIcon className='animate-bounce w-6 hover:animate-none' icon="angle-down" />
            </div>
          </div>
          <div className={showShowDescription ? "inline-block" : "hidden"}>
            <p className="break-words mb-7"> {expandDescription}</p>
          </div>
          <div>
            <select className="mb-7 space-x-1 appearance-none select-none">
              {shadeName &&
                shadeName.map((color) => (
                  <option key={color.colour_name}>{color.colour_name}</option>
                ))}
            </select>
          </div>
          <div>
            <div className="mb-7 mr-6 space-x-1 flex flex-wrap gap-2 w-50 ">
              {item.product_colors.map((color) => (
                <>
                  <button
                    key={color.hex_value}
                    className="inline-block w-3 hover:opacity-70"
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
          </div>

          <div>
            <button
              className=" shadow p-2 text-white mb-5 rounded-sm bg-black focus:ring-2"
              onClick={() => {
                addProductToCart(item, 1, item.price);
                flashCard(item.name);
                setCartAlertPopoverIsVisible(true);
              }}
            >
              Add to bag
            </button>
            {cartAlertPopoverIsVisible ? (
              <p
                className="
                bg-red-300
                text-center
            float-right   -600 font-bold
            text-black
              text-sm px-6 py-3 rounded border-blue border-2 hover:shadow-lg 
              outline-none focus:outline-none mr-1 mb-1
              "
              >
                {popover}
              </p>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayOnlyOneItem;
