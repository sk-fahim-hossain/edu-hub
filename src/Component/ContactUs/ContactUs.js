import React from 'react';
import Form from 'react-bootstrap/Form';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container contact">
            <Form className="form-area">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="tl"> <b>Email address</b> </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label> <b>Example textarea</b></Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Write your message here..."/>
                </Form.Group>
                <button className="btn btn-danger">SUBMIT</button>
            </Form>
        </div>
    );
};

export default ContactUs;