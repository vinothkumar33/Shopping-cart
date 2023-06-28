import { useState,useEffect } from 'react';
import { Card } from '@mui/material';
import { Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';

function Cart(){
    const[cart,setCart]=useState();
    const[amount,setAmount]=useState(0);
    
    //get data from localstorage
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('products'));
        if (items) {
         setCart(items);
        }
      });
      
      //add product amount in total amount
      const addAmount=()=>{
        cart.map((product)=>{   
            if(product.count >0){ 
              let newamount =amount + product.amount;
              setAmount(newamount)
            }    
        })
    }
    
    //subract a product amount from total amount
    const decreaseAmount=()=>{
        cart.map((product)=>{   
            let newamount;
            if(product.count >0){ 
              newamount =amount - product.amount;
              setAmount(newamount)
            }
            if(newamount <=0){
                setAmount(0)
            }   
        })
    }
    
    //increment a product count in cart
    const incrementCount=(id)=>{
          cart.map((product)=>{
            if(product.id === id){
                product.count += 1;
            }
          })
          addAmount()
          localStorage.setItem('products', JSON.stringify(cart));

    }

    //decrement a product count in cart
    const decrementCount=(id)=>{
        cart.map((product)=>{
            if(product.id === id){
                if(product.count >0){
                    product.count -= 1;
                }
            }
          })
          decreaseAmount()
          localStorage.setItem('products', JSON.stringify(cart));
 }
    return(
        <>
         <h1 style={{textAlign:"center"}}>Your Products</h1>
            <Card style={{height:"70vh",overflowY:"scroll"}} className='card' >
               {cart?
               <>{cart.map((item)=>{
                return(
                    <>
                    {item.count ?<> 
                        <div>
                            <img className='cart-image'  src={item.image}/>
                        </div>   
                        <div >
                          <h2>{item.type}</h2>
                          <h5>Size:{item.size}</h5>
                        </div>
                        <div  className='cart-button'>
                            <ul className='product-list'>
                                <li><button className='I-btn'  onClick={()=>{incrementCount(item.id)}}>< AddIcon /></button></li>
                                <li><input value={item.count} className='count-box' /></li>
                                <li><button className='d-btn'  onClick={()=>{decrementCount(item.id)}}>< MinimizeIcon  /></button></li>
                            </ul>
                        </div>
                        <hr />
                    </>:null}
                    </>
                )})}</>
                :<h1>No data</h1>}
            </Card>
            <Card className='card'> 
                 <h3 style={{marginLeft:"30%"}}>Total:<span style={{marginLeft:"30%"}}>${amount}</span></h3>
                 <div style={{marginLeft:"40%"}}><Button variant="contained">Buy Now</Button></div>
            </Card>
        </>
    )
    }
    
    export default Cart;