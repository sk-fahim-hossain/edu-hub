import React, { useState,useEffects } from 'react';
import './Courses.css';
import info from '../Fakedata/FakeData';
import SingleCourse from '../SIngleCourse/SingleCourse';


const Courses = () => {


    // console.log(data)
    return (
        <div id="Courses">
            <div class="container course-container">
                <div class="row">
                    <div class="col-12">
                        <div class="section-title">
                            {/* <img src="" alt=""  /> */}
                            
                            <h2>COURSES WE OFFER</h2>
                        </div>
                    </div>
                </div>
                <div class="row course-row" >


                   
                    {
                        info.map(course=><SingleCourse course={course}></SingleCourse>)
                        
                    }


                    
                </div>

            </div>
        </div>
    );
};

export default Courses;