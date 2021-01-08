import React from "react";
import { Link } from "react-router-dom";

export const CardBlock = ({ item }) => {
  return (
    <>
      {/* <div className="w-1/3">
          <img src={item.image} alt="eyeshadow" />
        </div> */}
      <div className={item.style}>
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-pink-800">
          {item.category}
        </h2>
        <h5 className="text-4xl font-normal leading-normal mt-0 mb-2 text-red-800">
          {item.type}
        </h5>
        <h5 className="inline-block break-words">{item.description}</h5>
        <button
          className='bg-black text-white active:bg-black font-bold uppercase text-base px-8 py-3
           shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" 
           style="transition: all .15s ease'
        >
          <Link
            to="/shop"
            className="text-white uppercase font-normal
             block  whitespace-no-wrap bg-transparent "
          >
            {item.button}
          </Link>
        </button>
      </div>
    </>
  );
};

export const Card = ({ item }) => {
  return (
    <div
      key={item.name}
      className="bg-gray-300 border-gray-300 h-64 
     w-64 p-4 border-4"
    >
      <img
        className=" h-10 w-10 md:h-6 md:w-6 md:h-24 md:w-24 shadow"
        src={item.api_featured_image}
        alt={item.name}
      />

      <div className=" text-gray-900 inline-block md:break-words text-center">
        <p>{item.name}</p>
        <h6>{`£${item.price}`}</h6>
      </div>
    </div>
  );
};

export default Card;
