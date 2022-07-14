import React from "react";
function Bank() {
    return (
        <>
            <h1>Bank Account Opening Form</h1>
            <form method="post" className="was-validated">
                <div className="mb-3 mt-3" style={{ width: "400px" }}>
                    <label for="Account Type" className="form-label">Account Type:</label>
                    <input type="text" className="form-control" id="Account Type" placeholder="Enter Account Type" name="Account Type" required />
                    <div className="valid-feedback">Correct Account Type</div>
                    <div className="invalid-feedback">Please enter your Account Type</div>
                </div>
                <h1>Name</h1>
                <div className="mb-3" style={{ width: "400px" }}>
                    <label for="Fname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="Fname" placeholder="Enter First Name" name="Fname" required />
                    <div className="invalid-feedback">Please enter your First Name</div>

                </div>
                <div className="mb-3" style={{ width: "400px" }}>
                    <label for="Lname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="Lname" placeholder="Enter Last Name" name="Lname" required />
                    <div className="invalid-feedback">Please enter your Last Name</div>

                </div>
                <h1>Phone Number</h1>
                <div className="mb-3" style={{ width: "400px" }}>
                    <label for="MOB" className="form-label">Phone Number</label>
                    <input type="MOB" className="form-control" id="MOB" placeholder="Enter Phone Number" name="MOB" required />
                    <div className="valid-feedback">Correct Phone Number</div>
                    <div className="invalid-feedback">Please enter your Phone Number</div>
                </div>
                <h1>Monthly Salary</h1>
                <div className="mb-3" style={{ width: "400px" }}>
                    <label for="Monthly Salary" className="form-label">Monthly Salary</label>
                    <input type="text" className="form-control" id="Monthly Salary" placeholder="Enter Monthly Salary" name="Monthly Salary" required />
                    <div className="invalid-feedback">Please enter your Monthly Salary</div>
                </div>
                <h1>Address</h1>
                <div className="mb-3" style={{ width: "400px" }}>
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter Address" name="address" required />
                    <div className="valid-feedback">Correct Address</div>
                    <div className="invalid-feedback">Please enter your Address</div>
                </div>
                <h1>How did you hear about us</h1>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">SMS</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">Outdoor Billboard</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">NewsPaper</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">Internet</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">Social Media</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">Radio</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">Friends</label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required />
                    <label class="form-check-label" for="myCheck">Other</label>
                </div>

                <center><button type="submit" className="btn btn-warning">Send</button></center>
            </form>
            <form method="post" className="was-validated">
            <h1>Flight Canclation</h1>
            <div className="mb-3" style={{ width: "400px" }}>
                <label for="Fname" className="form-label">First Name</label>
                <input type="text" className="form-control" id="Fname" placeholder="Enter First Name" name="Fname" required />
                <div className="invalid-feedback">Please enter your First Name</div>

            </div>
          
            <div className="mb-3" style={{ width: "400px" }}>
                <label for="Lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="Lname" placeholder="Enter Last Name" name="Lname" required />
            </div>
            <div className="invalid-feedback">Please enter your Last Name</div>
            <div className="mb-3" style={{ width: "400px" }}>
                    <label for="MOB" className="form-label">Phone Number</label>
                    <input type="MOB" className="form-control" id="MOB" placeholder="Enter Phone Number" name="MOB" required />
                    <div className="invalid-feedback">Please enter your Phone Number</div>
            </div>
            <div className="mb-3" style={{ width: "400px" }}>
                    <label for="text" className="form-label">Flight Number</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Flight Number" name="text" required />
                    <div className="invalid-feedback">Please enter your Flight Number</div>
            </div>
            <div className="mb-3" style={{ width: "400px" }}>
                    <label for="text" className="form-label">Ticket Number</label>
                    <input type="text" className="form-control" id="text" placeholder="Ticket Number" name="text" required />
                    <div className="invalid-feedback">Please enter your Ticket Number</div>
            </div>
            <h1>Flight Route</h1>
            <div className="mb-3" style={{ width: "400px" }}>
                    <label for="text" className="form-label">From</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter State" name="text" required />
                    <div className="invalid-feedback">Please enter State</div>
            </div>
            <div className="mb-3" style={{ width: "400px" }}>
                    <label for="text" className="form-label">to</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter state" name="text" required />
                    <div className="invalid-feedback">Please enter State</div>
            </div>
            <div className="mb-3" style={{ width: "400px" }}>
                    <label for="text" className="form-label">Refund Option</label>
                    <input type="text" className="form-control" id="text" placeholder="Enter Refund Option" name="text" required />
                    <label for="comment">Refund Details</label>
                            <textarea class="form-control" rows="5" id="Refund Details" name="text"></textarea>
                    <label for="comment">Reason of Canclation</label>
                            <textarea class="form-control" rows="5" id="Reason of canliation" name="text"></textarea>
            </div>
        </form> 

                </>
            );
                        }
            export default Bank;