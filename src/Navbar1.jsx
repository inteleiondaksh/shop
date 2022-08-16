import React from "react";
import { NavLink } from "react-router-dom";
function Navbar1() {
    return(
        <>
        <center>
                <nav className="navbar navbar-expand-sm bg-light  justify-content-center">

                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link justify-content-center" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link justify-content-center" to="/Product">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link justify-content-center" to="/PricingPlans">Pricing Plans</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link justify-content-center" to="/Contact1">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link justify-content-center" to="/Form1">⚫️Log in</NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>
                <button>Get Started</button>
            </center>
        </>
    )
}
export default Navbar1;