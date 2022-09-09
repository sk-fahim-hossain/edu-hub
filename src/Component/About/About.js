import React from 'react';
import Card from 'react-bootstrap/Card';
import imgData from '../Fakedata/imgData';
import './About.css';

const About = () => {
    console.log(imgData)
    return (
        <div>
            <Card>
                <div className="about-us_title">
                <h2><span style={{color:'red',borderRadius:'5px', border:'1px solid red'}}>EDU</span>HOME</h2>
                    <h3>The best education theme for you.</h3>
                </div>
                <div className="img-container">
                <Card.Img variant="top" src={imgData.about_us}  className="card-image"/>
                </div>
                <Card.Body>
                    <Card.Text class="about-us_info">
                    
                    <p>I must explain to you how all this mistaken idea of denouncing pleure and prsing pain was born <br></br> and I will give you a complete account of the system, and expound the actual teachings <br></br>  the master-builder of humanit happiness</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;