import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import info from '../Fakedata/FakeData';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css';




const CourseDetails = () => {

    const [data, setData] = useState(info)


    // useEffect(() => {
    //     const url = info;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(info => console.log(info))
    // },[])


    const { course_id } = useParams()
    // const foundedCourse = data.find(course => course.id === course_id)
    const found = data.find(course => {
        return course.id == course_id

    })
    
    const {id, title, description,img_link} = found;


    return (
        <div>
            <Card className="container course-details-container">
                <Card.Img className="details_img" variant="top" src={img_link} />
                <Card.Body>
                    <h2>{title}</h2>
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                </Card.Body>
                <button className="btn btn-danger">Buy Now</button>
            </Card>


        </div>
    );
};

export default CourseDetails;