import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  //burda önceden sepete eklendiyse kuralı gelsin
  //sadece sayısını quantity artır yapcez!
  //cart'da product ve quantity olcek
  //state burda sepet oldu
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        //referasn değişmesi lazım yoksam state sbt kalur!
        //map arrayi gezcek return'da toplar listeye ekler
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            //assign sepeti gez ürünü bul quantity değiştir!
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        //uç demek kopya al demek
        return [...state, { ...action.payload }];
      }

    case actionTypes.REMOVE_FROM_CART:
      //id farklıysa filtrele filter map gibi amaç referans değişsin
      const newState2 = state.filter(
        (cartItem) => cartItem.product.id !== action.payload.id
      );
      return newState2;
    default:
      return state;
  }
}
