import React from "react";
import { Card,  CardBlock} from "./Card";

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
