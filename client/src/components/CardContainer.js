import React from "react";
import Card from "./Card";
const CardContainer = ({ info }) => {
  return (
    <div>
      {info && (
        <div className="flex flex-row">
          {info.map((item) => (
            <div key={item.name} className="ml-12">
              <Card item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardContainer;
