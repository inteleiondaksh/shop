import React from "react";
import Navbar1 from "./Navbar1";
function Contact1() {
    return(
    <>
    <Navbar1/>
    <div className="bg-warning" style={{paddingLeft:"50px"}}>
        <div className="card-group">
            <div className="card bg-warning">
                <div className="card-body">
                    <h1>Contact</h1>
                    <p>500 Terry Francois Street San Francisco, CA 94158</p>
                    <p>General Inquiries: 123-456-7890</p>
                </div>
            </div>
            <div className="card bg-warning">
                <div className="card-body">
                    <br></br>
                    <br></br>
                    <p>Sales: info@mysite.com</p>
                    <p>Costumer Care: info@mysite.com</p>
                </div>
            </div>
            <div className="card bg-warning">
                <div className="card-body">
                    <h1>Quick Links</h1>
                    <p>Terms and Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div className="card bg-warning">
                <div className="card-body">
                <h1>Follow</h1>
                <p>Sign up to get the latest news on our product.</p>
                
                <input type="Email" name="email" placeholder=""/>
                <button type="button" className="btn" style={{backgroundColor:"black",color:"white"}}>Subscribe</button>
                </div>
            </div>
            <div className="card bg-warning">
                <div className="card-body">
                <h1>LinkedIn</h1>
                <h1>YouTube</h1>
                <h1>Facebook</h1>
                </div>
            </div>
        </div>

    </div>
    </>
    )
}export default Contact1;