import React from "react";
import PropTypes from "prop-types";

// Styled components
import CardIconSubHeading from "../card-icon-subheading";
import CardLink from "../card-link";

function CardInfo({ iconSrc, heading, href, content }) {
    return (
        <>
            <CardIconSubHeading iconSrc={iconSrc} heading={heading} />
            <CardLink href={href} content={content} />
        </> 
    );
}

CardInfo.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default CardInfo;