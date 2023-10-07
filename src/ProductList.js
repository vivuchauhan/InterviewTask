// ProductList.js
import './App.css'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addToCart, removeFromCart, updateCartQuantity } from './Redux/action';
import productsData from './productsData';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(loadProducts(productsData));
  }, [dispatch]);

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2); 
  };


  return (
    <div className='App'>
     <div style={{border:"1px solid black" }}>
       <h2>Shopping Cart</h2>
        {cart.map(item => (
            <div key={item.id} style={{border:"1px solid black", margin:"2% 40% 2% 40%"}}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(updateCartQuantity(item.id, item.quantity - 1))}>-</button>
            <button onClick={() => dispatch(updateCartQuantity(item.id, item.quantity + 1))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
        ))}
         <p style={{border:"2px solid black", margin:"2% 40%"}}>Total Price: ${calculateTotalPrice()}</p> 
      </div>
      <div style={{border:"1px solid black"}}>
        <h2>Products</h2>
        {products.map(product => (
            <div key={product.id} style={{border:"1px solid black", margin:"2% 40% 2% 40%"}}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
