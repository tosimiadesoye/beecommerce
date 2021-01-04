import React from "react";

export const CardBlock = ({ item }) => {
  return (
    <div className='bg-gray-300 border-gray-300 h-32 w-32 md:h-64 md:w-64 p-4 border-4'>
      <div key={item.name} className="ml-12">
        <img className="h-6 w-6 md:h-24 md:w-24" src={item.image} alt={item.name} />
        <div className=" text-gray-900 truncate ">
          <p>{item.name}</p>
          <h6>{`£${item.price}`}</h6>
        </div>
      </div> 
    </div>
  );
};

 export const Card = ({ item }) => {
  return (
    <div className='bg-gray-300 border-gray-300 h-32 w-32 md:h-64 md:w-64 p-4 border-4'>
      <div key={item.name} className="ml-12">
        <img className="h-6 w-6 md:h-24 md:w-24" src={item.image} alt={item.name} />
        <div className=" text-gray-900 truncate ">
          <p>{item.name}</p>
          <h6>{`£${item.price}`}</h6>
        </div>
      </div> 
    </div>
  );
};

export default Card;
