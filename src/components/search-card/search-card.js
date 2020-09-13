import React from "react";
import PropTypes from "prop-types";

// Styled components
import Card from "react-bootstrap/Card";

function SearchCard({ children, ...props }) {
  return (
        <Card className="shadow" bg="white" border="info" { ...props } >
          <Card.Body>{children}</Card.Body>
        </Card>
  );
}

SearchCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export default SearchCard;
