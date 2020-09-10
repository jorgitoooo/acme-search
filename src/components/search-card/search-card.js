import React from "react";
import Card from "react-bootstrap/Card";

function SearchCard({ children, ...props }) {
  return (
        <Card { ...props } className="shadow" bg="white" border="info">
          <Card.Body>{children}</Card.Body>
        </Card>
  );
}

export default SearchCard;
