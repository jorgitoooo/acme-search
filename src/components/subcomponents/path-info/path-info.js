import React from "react";

// Styled components
import CardIconSubHeading from "../../styled-components/card-icon-subheading";
import CardLink from "../../styled-components/card-link";

// SVG Icons
import fileIcon from "../../../assets/file.svg";

function PathInfo({ path }) {
    return (
        <>
            <CardIconSubHeading iconSrc={fileIcon} heading={"Path"} />
            <CardLink content={path} />
        </> 
    );
}

export default PathInfo;