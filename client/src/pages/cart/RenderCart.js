import React from "react";

const RenderCart = ({ info, incrementQuantity, decrementQuantity }) => {
  return (
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

      <div className='border-2 border-gray-900 h-10 w-20 text-center'>
        <button className='mr-2' onClick={() => decrementQuantity(info.productId._id)}>-</button>

        <button className='mr-2'>{info.quantity}</button>

        <button className='mr-2' onClick={() => incrementQuantity(info.productId._id)}>+</button>
      </div>
      <div>
        {" "}
        <h5> {`£ ${info.subTotal}`}</h5>
      </div>
    </div>
  );
};

export default RenderCart;
