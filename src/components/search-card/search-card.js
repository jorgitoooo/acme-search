import React from "react";

// Styled components
import Card from "react-bootstrap/Card";

function SearchCard({ children, ...props }) {
  return (
        <Card className="shadow" bg="white" border="info" { ...props } >
          <Card.Body>{children}</Card.Body>
        </Card>
  );
}

export default SearchCard;
