import React from "react";

function CardLink( { href, content, ...props } ) {
    return (
        <a href={href} className="text-muted mb-0 d-block" { ...props }>{content}</a>
    );
}

export default CardLink;