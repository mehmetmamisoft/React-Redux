import * as actionTypes from "./actionTypes";
export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}
export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  };
}
export function getCategories() {
  return function (dispatch) {
    // debugger; f12'de durdurma yeri

    let url = "http://localhost:3000/categories";

    return fetch(url)
      .then((response) => response.json())
      .then((sonuc) => dispatch(getCategoriesSuccess(sonuc)));
  };
}