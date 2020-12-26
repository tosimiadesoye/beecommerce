import React from 'react'
import { useLocation } from "react-router-dom";

const IndividualItem = (props) => {
    let location = useLocation();
    let id = location.state.itemData;
console.log(id)
    return (
        <div key={location.key}>
      <p>{id.name}</p> 
        </div>
    )
}

export default IndividualItem
