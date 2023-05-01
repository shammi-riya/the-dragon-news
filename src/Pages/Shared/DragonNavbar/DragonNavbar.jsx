import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from '../../../Provider/AuthProvider';

const DragonNavbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
    return (
        <Navbar className='my-4' collapseOnSelect expand="lg" bg="" variant="">
        <Container>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ml-2">
              
              <Link className='fs-5 fw-bold ml-2' to="/category/0">Home</Link>
              <Link className='fs-5 fw-bold px-2' to="/">About</Link>
              <Link className='fs-5 fw-bold' to="/">career</Link>
             
            </Nav>
            <Nav>
              <h1><HiUserCircle></HiUserCircle></h1>
             
            {
              user ?<> <button onClick={handleLogOut} className='py-2 px-4 bg-dark border-0 fs-5 text-light'>LogOut</button></>
              :
              <><Link to='/login'> <button className='py-2 px-4 bg-dark border-0 fs-5 text-light'>Login</button></Link>
             </>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default DragonNavbar;