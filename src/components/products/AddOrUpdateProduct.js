import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetail from "./ProductDetail";

//usestate-->setstate gibi useeffect componentdidmount gibi düşün
//lifecycle event bunlar
//connect lazım redux ve hooks için

function AddOrUpdateProduct({
  products, //state'den gelen
  categories,
  getProducts, //aksiyondan gelen
  getCategories,
  saveProduct,
  history,
  ...props //mevcut propları genişlet demekkopya al
}) {
  //destructing
  //product state'i product ile set etcez
  const [product, setProduct] = useState({ ...props.product });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
    //uyg sonsuz döngüye gelirse engelle
  }, [categories.length, props.product, getCategories]);

  //event ile datayı doldur
  //önceki product üstüne extends et üstüne yaz demek
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));

    validate(name,value);
  }

  function validate(name,value) {
    //usestate boş nesne vardı ...kopyala demek
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Ürün İsmi Olmalıdır",
        // alert(errors.productName)
      }));
    }
    else{
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
        // productName: "Hata yok demek",
        // alert(errors.productName)
      }));
    }
  }
  function handleSave(event) {
    //sayfa refresh engellemek için
    event.preventDefault();
    saveProduct(product).then(() => {
      //geçmiş sayfa yönlendirme
      history.push("/");
    });
  }

  return (
    //jsx açılır kutu textbox burasu formdetail buraya gelcek gare
    //state'de bulunan onchange product categoris gibi düşün
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
      errors={errors}
    />
  );
}

export function getProductById(products, productId) {
  //id number productid aşağısı ama querstring eşleşme yanluş ==yeterli
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

//class componentsda kullan
function mapStateToProps(state, ownProps) {
  //burasu querystring
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  //redux'da daha uzundu
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
