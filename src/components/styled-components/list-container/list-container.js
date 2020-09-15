import React from "react";
import PropTypes from "prop-types";

function ListContainer( { children, ...props } ) {
    return (
        <section className="py-3" {...props}>
            { children }
        </section>
    );
}

ListContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired
}

export default ListContainer;