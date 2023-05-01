import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { AiFillGoogleCircle, AiFillGithub ,AiFillFacebook,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai";
import Qzone from '../Qzne/Qzone';
import bg from '../../../assets/bg1.png'


const Rightnav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <button type="button" class="btn btn-outline-primary px-4 fs-5"><AiFillGoogleCircle></AiFillGoogleCircle>  sighn in with google</button>
            <button type="button" class="btn btn-outline-secondary mt-2 px-4 fs-5"><AiFillGithub></AiFillGithub>   sighn in with github</button>

            <div className='my-5'>
            <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='fs-5'><AiFillFacebook></AiFillFacebook>  FaceBook</ListGroup.Item>
                    <ListGroup.Item className='fs-5'><AiFillTwitterCircle></AiFillTwitterCircle> Twiter</ListGroup.Item>
                    <ListGroup.Item className='fs-5'><AiFillInstagram></AiFillInstagram>  Instragram</ListGroup.Item>
                    
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className='position-relative my-4'>
            <img src={bg}  alt="" />
            <div className="position-absolute top-50 start-50 translate-middle text-light">
            <h4 className='fs-3'>Create an Amazing Newspaper</h4>
            <p className='fs-5 my-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='py-2 px-4 bg-danger border-0 fs-5 text-light'>Learn More</button>
            </div>
            </div>
        </div>
    );
};

export default Rightnav;