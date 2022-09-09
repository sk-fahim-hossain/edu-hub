import React from 'react';
import {Link} from "react-router-dom"; 
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a class="navbar-brand" style={{border: '1px solid red', borderRadius: '5px', padding: '5px'}} href="#"><b><span style={{color: 'red'}}>EDU</span> HUB</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                            <Link class="nav-link" to="/"><b>Home</b></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/courses'><b>Courses</b></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to='/about_us'><b>About</b></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to='/contact'><b>Contact us</b></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;