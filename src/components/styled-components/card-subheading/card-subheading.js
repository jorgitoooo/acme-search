import React from "react";
import PropTypes from "prop-types";

function CardSubHeading( { heading } ) {
    return (
        <h5 className="text-muted mb-0">{heading}</h5>
    );
}

CardSubHeading.propTypes = {
    heading: PropTypes.string.isRequired
}

export default CardSubHeading;