import React from "react";
import PropTypes from "prop-types";

// Utilities
import utils from "../../../utils";

function CardLink( { href, content, ...props } ) {
    function onClick(e) {
        if (process.env.NODE_ENV === "development") {
            e.preventDefault();
        }
        
        utils.analytics.trackClick(e.target.href);
    }

    if (href) {
        return <a href={href} className="text-muted mb-0 d-block" onClick={onClick} { ...props }>{content}</a>
    } else {
        return <p className="text-muted mb-0 d-block" { ...props }>{content}</p>
    }
}

CardLink.propTypes = {
    content: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default CardLink;