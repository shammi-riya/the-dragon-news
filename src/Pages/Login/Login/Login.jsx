
import React, { useContext } from 'react';
import { Form,Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Login = () => {


    const {sighnIn,user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/category/0'



    const handleLogin = (e)=>{
       e.preventDefault()

       const email = e.target.email.value;
       const password = e.target.password.value;


       sighnIn(email,password)
       .then((userCredential) => {
         
        const user = userCredential.user;
        console.log(user)
        navigate(from, {replace:true})


        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
    
    }


    return (
        <Container>
            <h3 className='text-center fw-bold py-2'>Login Your Account</h3>
          <Form onSubmit={handleLogin} className='w-50 mx-auto p-5 bg-light'>
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
      <Button className='text-light w-100 py-2' variant="dark" type="submit">
        Login
      </Button>
      <Form.Text className="text-muted text-center pt-3">
         Dont have an account? <Link className='text-danger' to="/regester">Regester</Link>
        </Form.Text>
      </Form>
        </Container>
    );
};

export default Login;