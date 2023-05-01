import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import {FaArrowLeft } from "react-icons/fa";
import EditorsInside from './EditorsInside/EditorsInside';


const News = () => {
    const news = useLoaderData();
    const {image_url ,details,title,category_id
    } = news
    console.log(news);
    return (
       <div>
         <Card className='p-3'>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
         <Link to={`/catogory/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft>  All News in this catogory</Button></Link>
        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>
       </div>
    );
};

export default News;