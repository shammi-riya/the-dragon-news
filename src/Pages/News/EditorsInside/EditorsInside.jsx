import React from 'react';
import editor1 from '../../../assets/editorsInsight1.png'
import editor2 from '../../../assets/editorsInsight2.png'
import editor3 from '../../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';

const EditorsInside = () => {
    return (
        <div className='mt-4'>
            <h3>Editors HighLight</h3>
          <Row xs={1} md={2} lg={3} className="g-4 ">  
        <Col>
          <Card>
            <Card.Img variant="top" src={editor1}/>
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={editor1}/>
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={editor1}/>
            <Card.Body>
              <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        
        </Row>
    

        </div>
    );
};

export default EditorsInside;