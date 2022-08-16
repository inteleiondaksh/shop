 import React from "react";
 import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
 
 ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
   
  ,document.getElementById("root"));
///render means to show
//ReactDOM.render(what to show,where to show,return type);
//JSX: JavaScript Extendable or JavaScript and XML