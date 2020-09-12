import React from "react";

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

export default CardInfo;