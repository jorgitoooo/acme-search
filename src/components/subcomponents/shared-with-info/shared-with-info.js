import React from "react";

// Styled components
import Image from "react-bootstrap/Image";

// SVG Icons
import peopleOutlineIconSrc from "../../../assets/people-outline.svg";

function SharedWithInfo({ emails }) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center my-2">
                <Image src={peopleOutlineIconSrc} width={30} /><h5 className="mb-0 ml-1">Shared with</h5>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {emails.map((email, idx) => <a key={idx} href={`mailto:${email}`} className="mb-0 text-muted">{email}</a>)}
            </div>
        </>
    );
}

export default SharedWithInfo;