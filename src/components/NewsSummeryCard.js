import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark,FaShareAlt,FaStar,FaEye } from "react-icons/fa";

const NewsSummeryCard = ({news}) => {
    const {_id, total_view,title,details,image_url,author,rating} = news;
    console.log(news);

    return (
        <Card className="mb-4">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image src={author.img} style={{height: '60px'}} roundedCircle></Image>
                <div className='ms-2'>
                    <p className='mb-0'>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark className='me-2'></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
           <Card.Img src={image_url}></Card.Img>
          <Card.Text>
            {details.length > 250 ? <p>{details.slice(0,250 ) + "..."} <Link to={`/news/${_id}`}>Read More..</Link> </p>
             : <p>{details}</p>
            }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between align-items-center'">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating.number}</span>
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummeryCard;