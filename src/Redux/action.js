// actions.js
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const loadProducts = (products) => ({
  type: LOAD_PRODUCTS,
  payload: products
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const updateCartQuantity = (productId, quantity) => ({
  type: UPDATE_CART_QUANTITY,
  payload: { productId, quantity }
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});
