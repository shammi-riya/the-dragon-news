import React from 'react';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Leftnav from '../Pages/Shared/LrftNav/Leftnav';
import Rightnav from '../Pages/Shared/RightNav/Rightnav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
            <Header></Header>
            
         <Row>
        <Col lg={3} sm>
            <Leftnav></Leftnav>
        </Col>
        <Col lg={6} sm>
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

export default Main;