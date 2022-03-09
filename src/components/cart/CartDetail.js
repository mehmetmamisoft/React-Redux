import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";


class CartDetail extends Component {
  removeFromCart(product){
     this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "sepetten silindi! ", 2);
     
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* reducer'dan al propsu 
            aşağıda map içinde cart var state yani
            cartItem içindede product ve quantity vardu
            */}
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    onClick={() => this.removeFromCart(cartItem.product)}
                    color="danger"
                    outline
                  >
                    Sil
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
//mapi bağla state'e belli props'a
//burda state direk bağladuk
//2.işlem state proplara bağlamak demek
//state için burasu
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
//aksiyona bağlanmak içinde burasını kullancez gare
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //redux akysionu bağlıcaez
      //sonra change bağla
      //en son ürün bağla enski işlem bu
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
