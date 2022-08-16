import React from "react";
import Home1 from "./Home1"
import Product from "./Product";
import Pricingplans from "./Pricingplans";
import Contact1 from "./Contact1";
import Form1 from "./Form1";
import { Route, Switch } from "react-router-dom"
function App1() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home1} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/pricingplans" component={Pricingplans} />
                <Route exact path="/contact1" component={Contact1} />
                <Route exact path="/form1" component={Form1} />
                <Route component={Home1} />1
            </Switch>
        </>
    );
}export default App1;
