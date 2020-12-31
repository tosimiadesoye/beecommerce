import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const IndividualItem = () => {
	let location = useLocation();
	const item = location.state.itemData;
	const [shadeName, setShadeName] = useState();

	const addProductToCart = (productId, quantity) => {
		let products = [];
		if(localStorage.getItem('products')){
			products = JSON.parse(localStorage.getItem('products'));
		}
		var isAlreadyIn = false;
		var number;
		for (var i = products.length - 1; i >= 0; i--) {
			if(products[i].productId === productId) {
				isAlreadyIn = true;
				number = i;
				break;
			}
		}
		if(isAlreadyIn){
			products[i].quantity = products[i].quantity + quantity;
		}else{
			products.push({'productId' : productId, 'quantity' : quantity});
		}
		console.log(products)
		localStorage.setItem('products', JSON.stringify(products));
	}


	return (
		<div className="container shadow  h-50 w-50 mt-10 ">
		<div key={location.key} className="flex flex-row place-content-center truncate">
		<div>
		<img
            // style={{ width: "5rem" }}
            className="w-100"
            src={item.api_featured_image}
            alt={item.name}
            />
            </div>

            <div>
            <h2 className="mb-7">{`${item.brand} ${item.category}`}</h2>
            <h4 className="mb-7">{item.name}</h4>
            <h5 className="mb-7">{`£${item.price}`}</h5>

        {/* <button onClick={() => addToCart(item._id, 1)}>Add to bag</button> */}
        <div className="mb-7 space-x-1">
        {item.product_colors.map((color) => (
        	<>
        	<span
        	className="inline-block break-words md:break-all  w-8 hover:opacity-70"
        	style={{
        		backgroundColor: color.hex_value,
            borderRadius: "10px",
            // wordBreak: 'break-all',
            // display: 'inline-block',

        	}}
                  //  onClick={() => showColor(color.color_name)}
                  >
                  &nbsp;
                  </span>
               {/* <p>{color.colour_name}</p>  */}
           {/* <select><option>{color.colour_name}</option></select>  */}
          </>
          ))}
          </div>
          <button
          className=" shadow p-2 rounded-sm bg-blue-300 focus:ring-2"
          onClick={() => addProductToCart(item._id, 1)}
          >
          Add to bag
          </button>
          </div>
          </div>
          </div>
          );
    };

    export default IndividualItem;