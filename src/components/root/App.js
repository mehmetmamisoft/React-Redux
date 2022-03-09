import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";
import CartDetail from "../cart/CartDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container>
      <Navi />
      <Switch>
        {/* <Route exact path="/cart" component={CartList} /> */}
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/product" component={DashBoard} />
        <Route exact path="/cart" component={CartDetail} />
      </Switch>
     
    </Container>
  );
}

export default App;
