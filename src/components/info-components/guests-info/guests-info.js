import React from "react";
import PropTypes from "prop-types";

// Styled components
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

// SVG Icons
import peopleOutlineIconSrc from "../../../assets/people-outline.svg";

function GuestsInfo({ invitees }) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center my-2">
                <Image src={peopleOutlineIconSrc} width={30} /><h5 className="mb-0 ml-1">{invitees.length} invited</h5>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {invitees.map((invitee, idx) => <Badge pill key={idx} variant="info" className="m-1">{invitee}</Badge>)}
            </div>
        </>
    );
}

GuestsInfo.propTypes = {
    invitees: PropTypes.arrayOf(PropTypes.string)
};

export default GuestsInfo;