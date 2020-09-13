import React from "react";
import PropTypes from "prop-types";

function CardHeading( { heading } ) {
    return (
        <h4 className="font-weight-bold">{heading}</h4>
    );
}

CardHeading.propTypes = { 
    heading: PropTypes.string.isRequired
};

export default CardHeading;