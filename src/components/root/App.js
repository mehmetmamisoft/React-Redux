import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import CartDetail from "../cart/CartDetail";
import { Route, Switch } from "react-router-dom";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        {/* <Route exact path="/cart" component={CartList} /> */}
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/product" component={DashBoard} />
        <Route exact path="/cart" component={CartDetail} />
        <Route exact path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route exact path="/saveproduct" component={AddOrUpdateProduct} />
        <Route component={NotFound} />

      </Switch>
     
    </Container>
  );
}

export default App;
