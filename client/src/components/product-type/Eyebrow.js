import {useState, useEffect} from 'react'
import MakeupService from '../../services/product';

const Eyebrow = () => {
    const [eyebrow, setEyebrow] = useState('');
    useEffect(() => {
       allEyebrow() 
    },[])
    const allEyebrow = async () => {
        const result = await MakeupService.getEyebrow().then(res => {
            console.log(res)
            if (!res.error) {
                console.log(res.data)
                setEyebrow(res.data.data)
            }
        })
        return result
    }
    
    return (
        <>
        {!eyebrow ? "" : eyebrow.map(items => {
            console.log(items)
            return (
                <div key={items._id}>
                   
                    
            <img src={items.api_featured_image} style={{ width: '10rem' }} alt='api featured image' /> 


   <h6>{ items.product_type}</h6>
   <p>{items.description}</p>                       <p>{items.category}</p> 
                
   <h6>{items.name}</h6>
                <p>{items.rating}</p>
                <h4> {`£ ${items.price}`}</h4>
                
                        
                        <div>
                  {items.product_colors.map(colors => {
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
    </>
    )
}

export default Eyebrow
