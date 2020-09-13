import React from "react";
import PropTypes from "prop-types";

function ArrayConditionalWrapper({ children, array }) {
    if (Array.isArray(array) && array.length > 0) {
        return (
            <>
                {children}
            </>
        );
    } else {
        return null;
    }
}

ArrayConditionalWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ]).isRequired,
    array: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default ArrayConditionalWrapper;