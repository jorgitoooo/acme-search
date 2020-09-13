import React from "react";
import PropTypes from "prop-types";

function CardLink( { href, content, ...props } ) {
    if (href) {
        return <a href={href} className="text-muted mb-0 d-block" { ...props }>{content}</a>
    } else {
        return <p className="text-muted mb-0 d-block" { ...props }>{content}</p>
    }
}

CardLink.propTypes = {
    content: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default CardLink;