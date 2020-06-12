import React from 'react';
import Product from './Product'

import { useSelector } from 'react-redux';

const CartList = () => {
  const cart = useSelector(state => state.cartReducer.cart)
 
  return(
    <div className="container">
      {cart.length > 0 && cart.map((product, index) => {
        return(
          <Product key={index} product={product} itemPosition={index}/>
        )
      })}
    </div>   
  )
  
}

export default CartList 