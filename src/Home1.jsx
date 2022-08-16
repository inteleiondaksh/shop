import React from "react";
import Navbar1 from "./Navbar1";
function Home1() {
    return (
        <>
            <Navbar1 />
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h1>Communicate. Collaborate. Create.</h1>
                        <p className="text-center">WeDu provides an effective and powerful way to manage your projects</p>
                        <button>Get Started</button>
                        <p>🔒 Speed and Security       🔲 Flexibility and Scalability              🔗Better Collaboration
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="data:image/jpeg;base64,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" height="300" width="500" />
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <div className="card-body bg-warning">
                        <h1>With the Right Software, Great Things Can Happen</h1>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body bg-warning">
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                </div>
                <div className="card-group">
                    <h1>What We Offer</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="https://static.wixstatic.com/media/c837a6_07cdd24cb9e84acdb41d8c3568867354~mv2.jpg/v1/fill/w_226,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%204_5x-100.jpg" alt="https://static.wixstatic.com/media/c837a6_07cdd24cb9e84acdb41d8c3568867354~mv2.jpg/v1/fill/w_226,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%204_5x-100.jpg" />
                        <h1>Workflows That Work</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://static.wixstatic.com/media/c837a6_ef6bbe6808334282ab6c74203e782f28~mv2.jpg/v1/fill/w_226,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%207_5x-100.jpg" alt="https://static.wixstatic.com/media/c837a6_ef6bbe6808334282ab6c74203e782f28~mv2.jpg/v1/fill/w_226,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%207_5x-100.jpg" />
                        <h1>All-In-One Solution</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://static.wixstatic.com/media/c837a6_070e2f97109e4b4ba2e079e8f7f18f4f~mv2.jpg/v1/fill/w_226,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%205_5x-100.jpg" alt="https://static.wixstatic.com/media/c837a6_070e2f97109e4b4ba2e079e8f7f18f4f~mv2.jpg/v1/fill/w_226,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%205_5x-100.jpg" />
                        <h1>Comprehensive Customer Support</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <img src="https://static.wixstatic.com/media/c837a6_1f658b7b98b846d4865a783d52c8b43c~mv2.jpg/v1/fill/w_226,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%206_5x-100.jpg" alt="https://static.wixstatic.com/media/c837a6_1f658b7b98b846d4865a783d52c8b43c~mv2.jpg/v1/fill/w_226,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard%2048%20copy%206_5x-100.jpg" />
                        <h1>Smart Automation Tools</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <img src="data:image/png;base64,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" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>Built for Creatives, by Creatives</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                        <p>➕ All-In-OneToolkit         🗂Integrated File Sharing           🖌Total DesignFreedom</p>
                    </div>
                </div>

            </div>
            <div style={{ backgroundColor: "pink" }}>
                <h1>
                    Trusted Among Industry Leaders
                </h1>
                <p>
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </p>
                <br></br>
                <br></br>
                <br></br>
                <h1>||| Meta Definer 🔺Delta tech ➕ Tech Med ⚫️ Power Core</h1>
                <br></br>
                <br></br>
                <h1>🔗 Strongest Link  ⚙️COG Indistry ➪A.T. Motion ⓧ Bond</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>What Our Clients Say</h1>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h1>...</h1>
                        <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
                        <h3>Deena Levies, Mission Bay</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>...</h1>
                        <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
                        <h3>Tom Smithenson, Parkmerced</h3>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h1>...</h1>
                        <p>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</p>
                        <h3>Tilly Green, Hayes Valley</h3>
                    </div>
                </div>
            </div>
            <div className="card-group">
                <div className="card">
                    <div className="card-body">
                        <h1>Explore Our Pricing Options</h1>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you</p>
                        <button type="button" className="btn" style={{backgroundColor:"black",color:"white"}}>See More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="card">
                            <div className="card-body " style={{backgroundColor:"black",color:"white"}}>
                                <h6>Premium</h6>
                                <h1>$50</h1>
                                <p>Every month</p>
                                <p>Use this area to describe one of your memberships.</p>
                                <br></br>
                                <p>Valid for 12 months</p>
                                <div className="text-center">
                                <button type="button" className="btn" style={{backgroundColor:"white",color:"black"}}>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body" style={{backgroundColor:"pink",color:"black"}}>
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
            <center>
                <h1>Get Ready to Maximize Your Productivity With Our Workflow Solutions</h1>
                <button type="button" className="btn" style={{backgroundColor:"black",color:"white"}}>Get Started</button>
            </center>
            <img src="https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_SL1500_.jpg" alt="https://m.media-amazon.com/images/I/61PnHlc0HCL._AC_SL1500_.jpg" width={1280} height={500}/>
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
}export default Home1;
            