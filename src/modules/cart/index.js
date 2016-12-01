import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART } from './actionTypes';
export * from './actions';

function addToCart(cartItems, product){
  const existingProduct = cartItems.find(p => p.id === product.id);
  if(existingProduct){
    return cartItems.map( p => {
      if(p.id === product.id){
        p.qty += 1;
      }
      return p;
    });
  }
  else {
    const newProduct = Object.assign({}, product, { qty: 1 });
    return cartItems.concat([newProduct]);
  }
}

function changeQuantity(cartItems, productId, quantity){
  return cartItems.map(p => {
    if(p.id === productId){
      return Object.assign({}, p, { qty: quantity});
    }
    return p;
  })
  .filter(p => p.qty > 0);
}

export default function cart(state=[], action){
  switch(action.type){
    case ADD_TO_CART:
      return addToCart(state, action.product);
    case CHANGE_QUANTITY:
      return changeQuantity(state, action.product.id, action.quantity);
    case EMPTY_CART:
      return [];
    default:
      return state;
  }
}