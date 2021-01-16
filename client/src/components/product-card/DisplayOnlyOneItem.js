import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faCheck,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ReactHtmlParser from "react-html-parser";
import { SimilarProducts, ShopAllCardContainer } from "../../components";
library.add(faArrowDown, faCheck, faArrowUp);

const DisplayOnlyOneItem = (props) => {
  const { similarProduct, similarItem, makeupType } = props;

  const [shadeName, setShadeName] = useState([]);
  const [popover, setPopover] = useState([]);
  const [cartAlertPopoverIsVisible, setCartAlertPopoverIsVisible] = useState(
    false
  );
  const [showDescription, setShowDescription] = useState(false);
  const [expandDescription, setExpandDescription] = useState("");
  let location = useLocation();
  const item = location.state.itemData;

  // this function check if a product exist before adding to cart
  const addProductToCart = (productId, quantity, price) => {
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let isAlreadyIn = false;
    let number;
    let subTotal = parseFloat(price);
    //check if product is already
    for (let i = cart.length - 1; i >= 0; i--) {
      if (cart[i].productId._id === productId._id) {
        isAlreadyIn = true;
        number = i;
        break;
      }
    }
    //if it is in increment quantity and the price
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
      const card = (
        <div>
          <FontAwesomeIcon icon="check" /> You added{" "}
          <b className="text-bold">{item.name}</b>to cart
        </div>
      );
      setPopover(card);
    }
  };

  //popover is only true when a button id clicked
  const setTimer = () => {
    return setTimeout(() => setCartAlertPopoverIsVisible(false), 5000);
  };
  useEffect(() => {
    setTimer();
  }, [setTimer()]);

  return (
    <>
      <div>
        <div
          key={location.key}
          className="flex flex-col md:flex-row lg-flex-row 
         bg-gray-300
           container text-center
          shadow-sm items-center justify-center space-x-0 md:space-x-20
          overflow-y-auto
          "
        >
          <div>
            <div className="w-20 md:w-60 flex text-black mt-5">
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
            <div>
              <div className={showDescription ? "inline-block" : "hidden"}>
                <p className="break-normal w-40">
                  {" "}
                  {ReactHtmlParser(expandDescription)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 w-50">
            <div>
              <h2>{`${item.brand} ${item.category}`}</h2>

              <h4>{item.name}</h4>
              <h5>{`£${item.price}`}</h5>
              <div
                onClick={() => {
                  handleExpandDescription(item.description);
                  setShowDescription(!showDescription);
                }}
              >
                Description
                {showDescription ? (
                  <FontAwesomeIcon
                    className="animate-bounce w-6 hover:animate-none"
                    icon="arrow-up"
                  />
                ) : (
                  <FontAwesomeIcon
                    className="animate-bounce w-6 hover:animate-none"
                    icon="arrow-down"
                  />
                )}
              </div>
            </div>

            <div>
              {/*color name displayed  */}
              <select className="space-x-1 appearance-none select-none">
                {shadeName &&
                  shadeName.map((color) => (
                    <option
                      key={color.colour_name}
                    >{`Color: ${color.colour_name}`}</option>
                  ))}
              </select>
            </div>
            <div>
              {/* color button clicked */}
              <div className="mb-2 flex flex-wrap gap-1 px-4">
                {item.product_colors.map((color) => (
                  <>
                    <button
                      key={color.hex_value}
                      className="inline-block w-3 hover:opacity-70 rounded-full h-6 w-6"
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
              {/* if item is unavailable remove button */}
              <div>
                {item.item_available === 0 ? (
                  <h5 className="text-red-500">Out of Stock</h5>
                ) : (
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
                )}
              </div>
              {/* notify users that a product has been added to cart */}
              {cartAlertPopoverIsVisible ? (
                <p
                  className="
                bg-white
                text-center
                shadow
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
      </div>
      <div>
        <h1 className='text-center mt-5'>You might also like</h1>
        <SimilarProducts
          similarItem={similarItem}
          similarProduct={similarProduct}
          item={item}
        />
      </div>
    </>
  );
};

export default DisplayOnlyOneItem;
