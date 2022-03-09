import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// changecategoryreducer olabilie categoryListReducer vardı normalde
export default function changeCategoryReducer(
  state = initialState.categories,action)
 {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES_SUCCESS:
        //   return (newState = state + action.payload);
        return (action.payload);         

        default:
          return state;
      }
 }
