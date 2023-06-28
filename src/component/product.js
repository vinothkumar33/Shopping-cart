import { Card } from '@mui/material';
import { Button} from '@mui/material';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useState,useEffect } from 'react';

function Product(){
    const[cart,setCart]=useState();
    
    //get data from localstorage
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('products'));
        if (items) {
         setCart(items);
        }
      },[]);
     
    //add the product in cart ans set the data in localstorage
    const addtoCart=(id)=>{      
       cart.map((product)=>{
            if(product.id === id){
               return product.count = 1;
            }
       })
       localStorage.setItem('products', JSON.stringify(cart));

    }
    return(
        <>
            <div >
               {cart?<>{cart.map((item)=>{
                    return(
                        <>
                          <Card className='card'>
                          <Button color="success" variant="contained" size="small"><StarBorderPurple500Icon/>Assured</Button>
                            <ul className='product-list'>
                                
                                  <img className='image-card' src={item.image}/>
                                
                                <li>
                                    <label>Type</label>
                                    <h4>{item.type}</h4>
                                </li>
                                <li>
                                    <label>Cloth</label>
                                    <h4>{item.cloth}</h4>
                                </li>
                                <li>
                                    <label>Color</label>
                                    <h4>{item.color}</h4>
                                </li>
                                <li>
                                    <label>Size</label>
                                    <h4>{item.size}</h4>
                                </li>
                                <li>
                                    <label>Rate</label>
                                    <h4>${item.amount}</h4>
                                </li>
                                <li>
                                  <div className='button'>
                                     <Button variant="contained" onClick={()=>{addtoCart(item.id)}}>< ShoppingCartIcon /></Button>
                                  </div>
                                </li>
                               
                            </ul>
                           
                          </Card>
                        </>
                    )
                })}</>:null}
            </div>
        </>
    )
    }
    
    export default Product;