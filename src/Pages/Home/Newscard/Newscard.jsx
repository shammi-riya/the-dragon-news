import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaStarHalfAlt, FaStar } from "react-icons/fa"
import moment from 'moment/moment';
import Rating from 'react-rating';

const Newscard = ({ news }) => {
  
  const { image_url, rating, title, total_view, details, _id, author } = news;
  return (
    <div>
      <Card className=" mb-4">
        <Card.Header>
          <div className='d-flex gap-3'>
            <div>
              <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
            </div>
            <div className='flex-grow-1'>
              <h5>{author?.name}</h5>
              <p>{moment(author?.published_date).format('yyyy-mm-d')}</p>

            </div>

            <div className='fs-5 ml-2'>
              <FaRegBookmark></FaRegBookmark>
              <FaShareAlt></FaShareAlt>
            </div>
          </div>

        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="" src={image_url} />
          <Card.Text>
            {details?.length < 250 ? <>{details}</> : <>{details?.slice(0, 230)}...
              <Link to={`/news/${_id}`}>read more</Link></>}
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <div>
            <Rating
              placeholderRating={rating?.number}
              readonly
              emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
              placeholderSymbol={<FaStar></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </div>

          <div>
            <h5><FaEye></FaEye>  {total_view}</h5>
          </div>


        </Card.Footer>
      </Card>
    </div>
  );
};

export default Newscard;