import React from "react";
import PropTypes from "prop-types";

// Styled components
import Image from "react-bootstrap/Image";

function CardIconSubHeading( { iconSrc, heading } ) {
    console.log(iconSrc, typeof iconSrc);
    return (
        <div className="d-flex justify-content-center align-items-center my-2">
            <Image src={iconSrc} width={30} />
            <h5 className="mb-0 mx-1">{heading}</h5>
        </div>
    );
}

CardIconSubHeading.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
};

export default CardIconSubHeading;