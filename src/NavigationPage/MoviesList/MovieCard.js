import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ movieprops }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieprops.image} />
        <Card.Body>
          <Card.Title>{movieprops.name}</Card.Title>
          <Link to={`/MoviesList/${movieprops.id}`}>
            <Button>Go to details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
