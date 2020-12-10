import {useState, useEffect} from 'react'
import MakeupService from '../../services/product';

const Eyeshadow = () => {
    const [eyeshadow, setEyeshadow] = useState('');
    useEffect(() => {
       allEyeshadow() 
    },[])
    const allEyeshadow = async () => {
        const result = await MakeupService.getEyeshadow().then(res => {
            console.log(res)
            if (!res.error) {
                console.log(res.data)
                setEyeshadow(res.data.data)
            }
        })
        return result
    }
    
    return (
        <>
        {!eyeshadow ? "" : eyeshadow.map(items => {
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

export default Eyeshadow
