
import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Regester = () => {
    const { createUser } = useContext(AuthContext)
    const [acceptepted, setaceepted] = useState(false)



    const handleRegistrationFrom = (e) => {
        e.preventDefault()


        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        console.log(email, password, photo, name);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }


    const handleAkcepted = (event) => {
        setaceepted(event.target.checked)
    }


    return (
        <Container>
            <h4 className='text-center fw-bold my-3'>Regester Your Account</h4>
            <Form onSubmit={handleRegistrationFrom}
                className="w-50 mx-auto bg-light p-5">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='fw-bold'>Your  name</Form.Label>
                    <Form.Control type="name"
                        name="name"
                        placeholder="Enter Your name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label className='fw-bold'>Photo URl</Form.Label>
                    <Form.Control type="url"
                        name="photo"
                        placeholder="Enter photo url" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Email address</Form.Label>
                    <Form.Control type="email"
                        name="email"
                        placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password"
                        name="password"
                        placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAkcepted}
                        name="accept"
                        type="checkbox"
                        label={<>Accept term <Link to="/terms">condition </Link> </>} />
                </Form.Group>
                <Button disabled={!acceptepted}
                    className='w-100' 
                    variant="dark" 
                    type="submit">
                    Regestar
                </Button>

                <p>Already have an account please <Link to="/login">Login</Link></p>

            </Form>
        </Container>
    );
};

export default Regester;