import React, { Fragment } from "react";
import './Contact.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "../Home/Footer/Footer";
import Navigation from "../Navigation/Navigation";


const Contact = () => {
    return(
        <Fragment >
            
        <Form className="Form"> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
        </Form>

        <Footer />
        </Fragment>
    )
}

export default Contact ;