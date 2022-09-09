import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 footer-title">
                        
                        <h3 style={{textAlign:'center'}}>Site Map</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/courses">courses</Link></li>
                            <li><Link to="/about_us">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        
                    </div>
                    <div class="col-md-4  footer-title">
                        <h3>
                            Get In Touch
                        </h3>
                        <p>
                            Your address goes here, Street <br></br>
                            City, Roadno 785 New York
                        </p>
                        
                        <p>
                            Your address goes here, Street <br></br>
                            City, Roadno 785 New York
                        </p>
                        <p>
                            info@eduhub.com<br></br>
                            www.eduhub.com
                        </p>
                        
                    </div>
                    <div class="col-md-4 footer-title">
                        <h3 >
                            EDU-HUB CARE AND CARRIER
                        </h3>
                        <p>
                            I must explain to you how all this mistaken idea of denoung pleure and praising pain was born and give you a coete account of the system.
                        </p>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Footer;