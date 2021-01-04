import React from "react";
import { Card, CardBlock } from "./Card";

export const Block = ({ info }) => {
  return (
    <div>
      {info && (
        <div className="flex flex-row items-center">
          {info.map((item) => (
            <div key={item.name} className="ml-12">
              <CardBlock item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

 export const CardContainer = ({ info }) => {
  return (
    <div>
      {info && (
        <div className="flex flex-row items-center">
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

export default CardContainer
