import React from "react";

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

export default ArrayConditionalWrapper;