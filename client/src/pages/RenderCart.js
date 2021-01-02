import React from "react";

const RenderCart = ({ info, incrementQuantity, decrementQuantity }) => {

  return (
    <div className='flex flex-row space-x-4 gap-4 p-9'>
      <div >
        <img
          src={info.productId.api_featured_image}
          className="w-40"
          alt={info.productId.name}
        />
        <p style={{ wordWrap: "break-word" }}>{info.productId.name}</p>
      </div>
      <div>
        {" "}
        <h5> {`£ ${info.productId.price}`}</h5>
      </div>

      <div>
        <button onClick={() => decrementQuantity(info.productId._id)}>-</button>

        <button>{info.quantity}</button>

        <button onClick={() => incrementQuantity(info.productId._id)}>+</button>
      </div>
      <div>
        {" "}
        <h5> {`£ ${info.subTotal}`}</h5>
      </div>
    </div>
  );
};

export default RenderCart;


