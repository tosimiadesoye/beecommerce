import React from "react";



 export const Card = ({ item }) => {
  return (
    <div key={item.name} className='bg-gray-300 border-gray-300 h-64 
     w-64 p-4 border-4'>
    
        <img className=" h-10 w-10 md:h-6 md:w-6 md:h-24 md:w-24 shadow" src={item.image} alt={item.name} />
        <div className=" text-gray-900 inline-block md:break-words text-center">
          <p>{item.name}</p>
          <h6>{`£${item.price}`}</h6>
        </div>
      </div> 
    
  );
};

export default Card;
