import React from 'react'
import { useLocation } from "react-router-dom";

const IndividualItem = (props) => {
    let location = useLocation();
    console.log(location, 'hi')
    console.log('hi')
console.log(props)
    return (
        <div>
            hi
        </div>
    )
}

export default IndividualItem
