import React from "react";
import PropTypes from "prop-types";

function ListHeading( { children } ) {
    return (
        <section className="py-3">
            { children }
        </section>
    );
}

ListHeading.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired
}

export default ListHeading;