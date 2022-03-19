import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    ///uyg açıldıgında state yani product'ı  getir
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    // alertify.success(this.state.email + "added to db! ", 2);
    alertify.success(product.productName + "sepete eklendi! ", 2);
  };

  render() {
    return (
      <div>
        <h3>
          {/* Products bu text'di silduk! */}
          <Badge color="warning">Products</Badge>

          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* reducer'dan al propsu */}
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>
                  {/* route burasu */}
                  <Link to={"/saveproduct/"+product.id}>{product.productName}</Link>
                </td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.addToCart(product)}
                    color="info"
                    outline
                  >
                    Ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    //categories: state.categoryListReducer,
    products: state.productListReducer,
  };
}

//burda aksiyojada bağladık 2.import buranun direk bağladuk
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //redux akysionu bağlıcaez
      //sonra change bağla
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
    },
  };
}

//export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
