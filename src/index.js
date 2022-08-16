 import React from "react";
 import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App1 from "./App1";
 
 ReactDOM.render(
  <BrowserRouter>
  <App1/>
  </BrowserRouter>
   
  ,document.getElementById("root"));
///render means to show
//ReactDOM.render(what to show,where to show,return type);
//JSX: JavaScript Extendable or JavaScript and XML