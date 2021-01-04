import React from "react";
import { Card,  } from "./Card";



  const CardContainer = ({ info }) => {
  return (
    <div>
      {info && (
        <div className="flex flex-col md:flex-row items-center gap-4">
          {info.map((item) => (
            <div key={item.name} >
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardContainer
