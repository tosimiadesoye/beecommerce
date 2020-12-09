import { useState, useEffect } from 'react';
import MakeupService from '../services/product';
const Shop = () => {
       const [product, setProduct] = useState('')
     useEffect(() => {
         const makeupProduct = async () => {
             const response = await MakeupService.getProduct();
             console.log(response.data.items)
             if (!response.error) {
                 setProduct(response.data.items)
             }
         }
        makeupProduct()
    },[])
    
     console.log(product)
    
    return (
      <div>
        {!product ? "":
                    product.map(data => {
                  console.log(data)
                  return (
                    <div key={data._id}>
                      <img src={ data.api_featured_image} alt='api featured image'/> 
                      <h6>{data.brand}</h6>
                      <h5>{data.category}</h5>
                      <p>{ data.description}</p>
                    <img src={data.image_link} alt='image link'/>
                      <h5>{data.name}</h5>
                      <h4> {`£ ${data.price}`}</h4>
                      <a href={data.product_link}> shop product on companies website</a>
                      <h6>{ data.product_type}</h6>
                      <p>{data.rating}</p>
                      <div>
                        {data.product_colors.map(colors => {
                          console.log(colors)
                          return (
                            <p style={{color: colors.hex_value}}>
                            {colors.hex_value}
                          </p>)
                        })}
                       </div>
                    </div>
                  )
              
            })} 
      </div>
    );
  };
  
  export default Shop;