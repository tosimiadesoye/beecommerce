import { useState, useEffect } from 'react'
import MakeupService from '../../services/product';
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

function Blush() {
    const [blush, setBlush] = useState('');
    useEffect(() => {
       allBlush() 
    },[])
    const allBlush = async () => {
        const result = await MakeupService.getBlush().then(res => {
            console.log(res)
            if (!res.error) {
                console.log(res.data)
                setBlush(res.data.data)
            }
        })
        return result
    }
    
    return (
      <>
            {!blush ? "" : blush.map(items => {
                console.log(items)
                return (
                    <div>
                        <CardColumns  key={items._id}>
                          <Card>
                            <Card.Img src={items.api_featured_image} style={{ width: '10rem' }} alt='api featured image' /> 
    <Card.Body>

       <Card.Title>{ items.product_type}</Card.Title>
       <Card.Text>{items.description}</Card.Text>                       <p>{items.category}</p> 
                    
       <h6>{items.name}</h6>
                    <p>{items.rating}</p>
                    <h4> {`£ ${items.price}`}</h4>
                    
                            </Card.Body>
                            <div>
                      {items.product_colors.map(colors => {
                        console.log(colors)
                        return (
                          <p style={{color: colors.hex_value}}>
                          {colors.hex_value}
                        </p>)
                      })}
                     </div>
  </Card>

                      </CardColumns>
                    </div>
                )
        })}
        </>
    )
}

export default Blush
