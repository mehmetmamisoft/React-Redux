import * as actionTypes from "./actionTypes";

export function createProductSuccess(product) {
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    //buraya kadar data yok body'de geliyor
    //request'ler strign'dir response cevap verme demek
    body: JSON.stringify(product),
    //buraya kadar then yok gare!
    //hata varsa catch'e düşer
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  //action devreye giriyor
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        //id varsa(?) id yoksam :
        //burasu redux ve reducer kısmı
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

//response sonucuna göre karar vercek durum oluştu
export async function handleResponse(response) {
  if (response.ok) {
     return response.json();
  }
  //sonuç ok değilse bir hata var demek
  const error=await response.text()
  
  //hata varsa catch çalışcak
  throw new Error(error)
}

export function handleError(error) {
  console.error("Bşr hata oluştı");
  throw error;
}

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}
export function getProducts(categoryId) {
  return function (dispatch) {
    // debugger; f12'de durdurma yeri
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((sonuc) => dispatch(getProductsSuccess(sonuc)));
  };
}
