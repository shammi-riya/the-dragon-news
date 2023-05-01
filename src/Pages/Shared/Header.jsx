import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import DragonNavbar from './DragonNavbar/DragonNavbar';

const Header = () => {
    return (
        <Container>
            <div className='text-center my-4'>
                <img src={logo} alt="" />
                <h5>Journalism Without Fear or Favour</h5>
                <h6>{moment().format("dddd, MMMM D, YYYY")}</h6>
               
            </div>

            <div className='bg-light p-3 d-flex align-items-center'>
            <div>
                <button className='py-2 px-4 bg-danger border-0 fs-5 text-light'>Latest</button>
            </div>
            <div className='text-danger'>
                <Marquee speed={150} pauseOnHover={true}>
                <h6>Match highlight garmany vs span at its happent...Match highlight garmany vs span at its happent...</h6>
                </Marquee>
            </div>
            </div>
            <DragonNavbar></DragonNavbar>
        </Container>
    );
};

export default Header;