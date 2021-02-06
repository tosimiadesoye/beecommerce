import React from "react";
import Img from 'react-cool-img'

const RenderCart = (props) => {
  const { info, editQuantity, removeOneItemFromCart } = props;
 
  return (
    <>
      <div className="flex flex-row  gap-4 md:gap-9 lg:gap-20 p-4 items-center 
      justify-center align-center md:p-9 mx-2 md:mx-4 ">
        <div>
          <Img
            src={info.productId.api_featured_image}
            className="w-10 md:w-20 shadow"
            sizes={[400]}
            alt={info.productId.name}
          />
          
        </div>
        <div className="mr-2">
          {" "}
          <p className="inline-block break-words w-20">
            {info.productId.name}
          </p>
        </div>
        <div>
        <h5> {`${info.productId.price_sign} ${info.productId.price}`}</h5>
        </div>

        <div className="flex flex-col md:flex-row text-lg gap-4 w:10 md:w-20 h-15 md:h-12 text-center">
          <button
            className="mr-2"
            onClick={() => editQuantity(info.productId._id, false)}
          >
            -
          </button>

          <button className="mr-2">{`${info.quantity}`}</button>

          <button
            className="mr-2"
            onClick={() => editQuantity(info.productId._id, true)}
          >
            +
          </button>
        </div>
        <div>
          {" "}
          <h5> {`£${info.subTotal}`}</h5>
          <button
            className="text-red-500 active:bg-pink-600 font-bold uppercase 
          text-xs px-4 py-2 rounded  hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => removeOneItemFromCart(info.productId._id)}
          >
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default RenderCart;
