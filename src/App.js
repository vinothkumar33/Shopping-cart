import './App.css';
import './style.css'

import NavBar from './component/navbar';
import Product from './component/product';
import Cart from './component/cart';

function App() {
  

  return (
    <>
    
    <div >
        <NavBar />
        <div  className='container'>
        <Product />
        </div>
        <div className='cart-container'>
        <Cart />
        </div>
        
          </div>
         
    
    
          
    </>
  );
}

export default App;
