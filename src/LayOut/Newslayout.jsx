import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Rightnav from '../Pages/Shared/RightNav/Rightnav';
import Footer from '../Pages/Shared/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';

const Newslayout = () => {
    return (
        <div>
            <Container>  
                <Header></Header>        
         <Row>
        <Col lg={9} sm>
            <Outlet></Outlet>
        </Col>
        <Col lg={3} sm>
            <Rightnav></Rightnav>
        </Col>
        </Row>
   
            <Footer></Footer>
            </Container>
        </div>
    );
};

export default Newslayout;