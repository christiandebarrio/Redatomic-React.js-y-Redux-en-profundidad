import { SET_ROUTE } from './actionTypes';

function setRoute(newRoute){
  return {
    type: SET_ROUTE,
    route: newRoute
  };
}

export function goToCatalog(){
  return setRoute('catalog');
}

export function goToCart(){
  return setRoute('cart');
}

export function goToCheckout(){
  return setRoute('checkout');
}

export function goToThankyou(){
  return setRoute('thank-you');
}