import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData();
  const { title, image_url, details, author, rating } = news;
  return (
    <div>
      <h2>News Details</h2>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <div className="d-flex justify-content-between m-4">
          <p>
            <b>Author:</b> {author.name}
          </p>
          <p>
            <b>Publish-Date:</b> {author.published_date}
          </p>
          <p>
            <b>Rating:</b> {rating.number}
          </p>
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{details}</Card.Text>
          <Button variant="primary">Go News Category</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
