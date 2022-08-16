import React from "react";
import Navbar1 from "./Navbar1";
function Pricingplans() {
    return (
        <>
        <Navbar1/>
        <div className="card-group">
        <div className="card">
                <div className="card-body">
                    <div className="card">
                        <div className="card-body " style={{ backgroundColor: "yellow", color: "black" }}>
                            <h6>Free</h6>
                            <h1>$0</h1>
                            <p>Every month</p>
                            <p>Use this area to describe one of your memberships.</p>
                            <br></br>
                            <p>Valid for 3 months</p>
                            <div className="text-center">
                                <button type="button" className="btn" style={{ backgroundColor: "black", color: "white" }}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: "pink", color: "black" }}>
                            <p>☑️I'm a benefit</p>
                            <br></br>
                            <p>☑️I'm a benefit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="card">
                        <div className="card-body " style={{ backgroundColor: "yellow", color: "black" }}>
                            <h6>Standard</h6>
                            <h1>$30</h1>
                            <p>Every month</p>
                            <p>Use this area to describe one of your memberships.</p>
                            <br></br>
                            <p>Valid for 6 months</p>
                            <div className="text-center">
                                <button type="button" className="btn" style={{ backgroundColor: "black", color: "white" }}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: "pink", color: "black" }}>
                            <p>☑️I'm a benefit</p>
                            <br></br>
                            <p>☑️I'm a benefit</p>
                            <br></br>
                            <p>☑️I'm a benefit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="card">
                        <div className="card-body " style={{ backgroundColor: "black", color: "white" }}>
                            <h6>Premium</h6>
                            <h1>$50</h1>
                            <p>Every month</p>
                            <p>Use this area to describe one of your memberships.</p>
                            <br></br>
                            <p>Valid for 12 months</p>
                            <div className="text-center">
                                <button type="button" className="btn" style={{ backgroundColor: "white", color: "black" }}>Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: "pink", color: "black" }}>
                            <p>☑️I'm a benefit</p>
                            <br></br>
                            <p>☑️I'm a benefit</p>
                            <br></br>
                            <p>☑️I'm a benefit</p>
                            <br></br>
                            <p>☑️I'm a benefit</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
} export default Pricingplans;