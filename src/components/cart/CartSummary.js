import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

import alertify from "alertifyjs";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + "sepetten silindi! ", 2);
  }

  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Boş </NavLink>
      </NavItem>
    );
  }

  renderSummary() {
    return (
      //jsx
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Sepetiniz
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge
                  color="danger"
                  onClick={() =>
                    //remove yazılınca burda değişti
                    // this.props.actions.removeFromCart(cartItem.product)
                    this.removeFromCart(cartItem.product)

                  }
                >
                  X
                </Badge>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}

            <DropdownItem divider />
            <DropdownItem>
              <Link to={"/cart"}>Sepete Git</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  render() {
    return (
      <div>
        {
          //maps içinde state içinde vcart'dan geldu
          this.props.cart.length > 0
            ? this.renderSummary()
            : this.renderEmptyCart()
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
