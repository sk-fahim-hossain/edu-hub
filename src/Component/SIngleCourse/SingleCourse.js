import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleCourse.css';


const SingleCourse = (props) => {

    const {title,description,id,img_link} = props.course;

    const navigate = useNavigate()
    const CourseDetails = () => {
        const path = `/courses/${id}`
        navigate(path)
    }


    const max_string = 248;
    return (
        <div>
            <div class="col-lg-4 col-md-6">
                <div class="single-course">
                    <div class="course-img">
                        <a href="course-details.html">
                            <img src={img_link} alt="" />
                            <div class="course-hover">
                                <i class="fa fa-link"></i>
                            </div>
                        </a>
                    </div>
                    <div class="course-content">
                        <h3><a href="course-details.html">{title}</a></h3>
                        {
                            props.course.description.length > max_string?
                            (
                             <div>
                                   {`${description.substring(0, max_string)}...`}
                                   
                             </div>
                                // <p>{props.course.description}</p>
                            ): <p>{description}</p>
                        }
                        <br />
                        <button className="default-btn course-more-info-btn" onClick={CourseDetails}>read more</button>
                        {/* <a class="default-btn course-more-info-btn"  >read more</a> */}
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default SingleCourse;