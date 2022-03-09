import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// 3.09
export default function productListReducer(
  state = initialState.products,action)
 {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
        //   return (newState = state + action.payload);
        return (action.payload);         

        default:
          return state;
      }
 }
