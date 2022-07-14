import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className="bg-dark text-white text-center">
                <p>Sale is on! 25% off sitewide using TEES25 at checkout</p>
            </div>

            <center>
                <nav className="navbar navbar-expand-sm bg-light  justify-content-center">

                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">T Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/new">New</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/women">Women</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/men">Men</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/form">⚫️Log in🛍</NavLink>
                            </li>
                        </ul>
                    </div>

                </nav>
            </center>

        </>
    );
}
export default Navbar;