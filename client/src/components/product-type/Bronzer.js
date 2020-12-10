import {useState, useEffect} from 'react'
import MakeupService from '../../services/product';

const Bronzer = () => {
    const [bronzer, setBronzer] = useState('');
    useEffect(() => {
       allBronzer() 
    },[])
    const allBronzer = async () => {
        const result = await MakeupService.getBronzer().then(res => {
            console.log(res)
            if (!res.error) {
                
                setBronzer(res.data.data)
            }
        })
        return result
    }
    
    return (
        <>
        {!bronzer ? "" : bronzer.map(items => {
          
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

export default Bronzer
