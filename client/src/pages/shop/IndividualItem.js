import React from "react";
import { useLocation } from "react-router-dom";

const IndividualItem = ({ addToCart  }) => {
  let location = useLocation();
  let id = location.state.itemData;
  

  return (
    <div key={location.key}>
      <p>{id.name}</p>
      <p>{id.brand}</p>
      <img
        style={{ width: "5rem" }}
        src={id.api_featured_image}
        alt={id.name}
      />
      <p>{`£${id.price}`}</p>
      <button onClick={() => addToCart(id._id, 1)}>Add to bag</button>
      <div>
        {id.product_colors.map((color) => (
          <p
            style={{
              backgroundColor: color.hex_value,
              display: "inline-block",
              wordWrap: "break-word",
            }}
          >
            {color.hex_value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default IndividualItem;
