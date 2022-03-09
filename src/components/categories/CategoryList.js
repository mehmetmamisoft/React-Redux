import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";

import { Badge } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    ///uyg açıldıgında state yani kategoriyiyi  getir
    this.props.actions.getCategories();
  }

  selectCategory=(category)=>{
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
  }
  render() {
    return (
      <div>
        {/* <h3>Categories </h3> */}
        <h3>
        <Badge color="warning">
            Products
          </Badge>
        </h3>
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem active={
              category.id===this.props.currentCategory.id
            }
            onClick={() =>this.selectCategory(category) }
             key={category.id}>
                 {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* props map ettik 
        <h5>Kategorisi:{this.props.currentCategory.categoryName}</h5>
        */}
      </div>
    );
  }
}

//mapi bağla state'e belli props'a
//burda state direk bağladuk
//2.işlem state proplara bağlamak demek
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}
//burda aksiyojada bağladık 2.import buranun direk bağladuk
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      //redux akysionu bağlıcaez
      //sonra change bağla
      //en son ürün bağla enski işlem bu
  getCategories: bindActionCreators(categoryActions.getCategories,dispatch),
  changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
  getProducts: bindActionCreators(productActions.getProducts, dispatch),

    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
