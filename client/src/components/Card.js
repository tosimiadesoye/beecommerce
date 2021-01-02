import React from "react";

const Card = ({ item }) => {
  return (
    <div className=''>
      <div key={item.name} className="ml-12">
        <img className="h-70 w-13" src={item.image} alt={item.name} />
        <div className="text-center">
          <p>{item.name}</p>
          <h6>{`£${item.price}`}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
