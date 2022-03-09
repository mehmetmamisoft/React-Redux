//burasu reducer için toplama kampı combine etcez gare

import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import saveProductReducer from "./saveProductReducer";

const rootReducers = combineReducers({
  // changeCategoryReducer:changeCategoryReducer normali bu
  //object ile reducer'ları geçiyoruz
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  cartReducer,
  saveProductReducer,
});

export default rootReducers;
