import React from "react";

const RenderCart = (props) => {
  const {
    info,
    incrementQuantity,
    decrementQuantity,
    removeOneItemFromCart,
  } = props;
  return (
    <>
    <div className="flex flex-row  gap-12 md:gap-48 p-9  mx-4 ">
      <div>
        <img
          src={info.productId.api_featured_image}
          className="w-10 md:w-20"
          alt={info.productId.name}
        />
        {/* style={{ wordWrap: "break-word" }} */}
        <p className="inline-block break-normal w-20">{info.productId.name}</p>
      </div>
      <div>
        {" "}
        <h5> {`£ ${info.productId.price}`}</h5>
      </div>

      <div className="border-2 border-gray-900 w-20 h-11 md:h-10 text-center">
        <button
          className="mr-2"
          onClick={() => decrementQuantity(info.productId._id)}
        >
          -
        </button>

        <button className="mr-2">{info.quantity}</button>

        <button
          className="mr-2"
          onClick={() => incrementQuantity(info.productId._id)}
        >
          +
        </button>
      </div>
      <div>
        {" "}
          <h5> {`£ ${info.subTotal}`}</h5>
          <button className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase 
          text-xs px-4 py-2 rounded  hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
            type="button" style={{transition: "all .15s ease"}}
 onClick={()=>removeOneItemFromCart(info.productId._id)}>delete</button> 
      </div>
      </div>
       
      </>
  );
};

export default RenderCart;
