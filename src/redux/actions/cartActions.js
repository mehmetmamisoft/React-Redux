import * as actionTypes from "./actionTypes";

//burda apiye filan gerek yok thunk operasyon yok buraçta
//ürün göndermeklazum
//cartItem sepet elamanı
export function addToCart(cartItem) {
    return {
      type: actionTypes.ADD_TO_CART,
      payload: cartItem,
    };
  }

  export function removeFromCart(product) {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      payload: product,
    };
  }