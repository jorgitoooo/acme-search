import React from "react";
import PropTypes from "prop-types";

// Utilities
import utils from "../../../utils";

function CardLink( { href, content, ...props } ) {
    function trackClick(e) {
        const { href } = e.target;
        if (href.startsWith("tel")) {
            utils.analytics.callEvent(`user calling ${href.split(":")[1]}`);
        } else if (href.startsWith("mailto")){
            utils.analytics.mailEvent('user clicked email address');
        } else {
            utils.analytics.clickEvent(`user clicked link ${href}`);
        }
    }
    
    if (href) {
        return <a href={href} className="text-muted mb-0 d-block" onClick={trackClick} { ...props }>{content}</a>
    } else {
        return <p className="text-muted mb-0 d-block" { ...props }>{content}</p>
    }
}

CardLink.propTypes = {
    content: PropTypes.string.isRequired,
    href: PropTypes.string
};

export default CardLink;