import React from 'react';
import Courses from '../Courses/Courses';
import Header from './../Header/Header';
import './Home.css';
import Footer from './../Footer/Footer';
import SingleCourse from './../SIngleCourse/SingleCourse';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Courses></Courses>
            <div>
                <div className="about-area pb-135 pt-130 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-content">
                                    <h2><span>EDUHOME</span> the best education theme for you</h2>
                                    <p>I must explain to you how all this mistaken idea of denouncing pleure and prsing pain was born and I will give you a complete account of the system, and expound the actual teachings  the master-builder of humanit happiness</p>
                                    
                                    <a className="default-btn" href="about.html">buy now</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-img">
                                   <img src="../../imgs/course.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <SingleCourse></SingleCourse> */}
            {/* <Footer></Footer>
 */}


        </div>
    );
};

export default Home;