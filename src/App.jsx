import React from "react";
import Navbar from "./Navbar"
import Home from "./Home"
import New from "./New"
import Women from "./Women"
import Men from "./Men"
import Form from "./Form"
import {Route,Switch} from "react-router-dom"
function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/women" component={Women}/>
      <Route exact path="/men" component={Men}/>
      <Route exact path="/form" component={Form}/>
    </Switch>
    </>
  );
}

export default App;
