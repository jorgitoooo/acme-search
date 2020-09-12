import React from "react";

// Styled components
import Image from "react-bootstrap/Image";

function CardIconSubHeading( { iconSrc, heading } ) {
    return (
        <div className="d-flex justify-content-center align-items-center my-2">
            <Image src={iconSrc} width={30} />
            <h5 className="mb-0 mx-1">{heading}</h5>
        </div>
    );
}

export default CardIconSubHeading;