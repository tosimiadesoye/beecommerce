import {useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

const Shop = ({product, makeupProduct}) => {
   
  useEffect(() => {    
      makeupProduct()
    }, [])
    
  return (

      <div>
        {!product ? "":
                    product.map(data => {
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