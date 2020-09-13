import React from "react";
import PropTypes from "prop-types";

function ListHeading( { heading } ) {
    return (
        <h1 className="font-weight-bold">{heading}</h1>
    );
}

ListHeading.propTypes = {
    heading: PropTypes.string.isRequired
}

export default ListHeading;