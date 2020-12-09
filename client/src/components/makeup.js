import { useState, useEffect } from 'react';
import MakeupService from '../../services/product'


function Main() {
//     const [product, setProduct] = useState('')
//     useEffect(() => {
//         const makeupProduct = async () => {
//             const response = await MakeupService.getProduct();
//             console.log(response.data.items)
//             if (!response.error) {
//                 setProduct(response.data.items)
//             }
//         }
//        makeupProduct()
//    },[])
    
    // console.log(product)
    // product.map(data => {
    //     console.log(data)
    // } )
    return (
        <>
            < main className='item' >
                
                {/* {!product ? "":
                    product.map(data => {
                  console.log(data)
                  return (
                      <div key={data.id}>
                          <h1>{data.brand}</h1>
                      </div>
                  )
              
            })}    */}
            </main > 
          </>  
       
    )
}

export default Main

