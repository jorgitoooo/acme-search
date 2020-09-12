import React from "react";

// Styled components
import CardIconSubHeading from "../../styled-components/card-icon-subheading";
import CardLink from "../../styled-components/card-link";

// SVG Icons
import peopleOutlineIconSrc from "../../../assets/people-outline.svg";

function SharedWithInfo({ emails }) {
    return (
        Array.isArray(emails) && (
            <>
                <CardIconSubHeading iconSrc={peopleOutlineIconSrc} heading={"Shared with"} />
                <div className="d-flex flex-wrap justify-content-center">
                    {emails.map((email, idx) => <CardLink key={idx} href={`mailto:${email}`} content={email} />)}
                </div>
            </>
        )
    );
}

export default SharedWithInfo;