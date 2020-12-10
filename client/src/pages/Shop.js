import { useState, useEffect } from 'react';
import MakeupService from '../services/product';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
const Shop = () => {
  const [product, setProduct] = useState('');
     useEffect(() => {    
        makeupProduct()
     }, [])
  
    const makeupProduct = async () => {
      const response = await MakeupService.getProduct();
      console.log(response.data.items)
      if (!response.error) {
          setProduct(response.data.items)
      }
  }
     console.log(product)
    
  return (

      <div>
        {!product ? "":
                    product.map(data => {
                  console.log(data)
                      return (
                        <CardColumns  key={data._id}>
                          <Card>
                            <Card.Img src={data.api_featured_image} style={{ width: '10rem' }} alt='api featured image' /> 
    <Card.Body>

       <Card.Title>{ data.product_type}</Card.Title>
       <Card.Text>{data.description}</Card.Text>                       <p>{data.category}</p> 
                    
       <h6>{data.name}</h6>
                    <p>{data.rating}</p>
                    <h4> {`£ ${data.price}`}</h4>
                    
                            </Card.Body>
                            <div>
                      {data.product_colors.map(colors => {
                        console.log(colors)
                        return (
                          <p style={{color: colors.hex_value}}>
                          {colors.hex_value}
                        </p>)
                      })}
                     </div>
  </Card>

                      </CardColumns>
                  )
              
            })} 
          </div>
     
    );
  };
  
  export default Shop;