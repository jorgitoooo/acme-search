import React from "react";

// Styled components
import CardIconSubHeading from "../../styled-components/card-icon-subheading";
import CardLink from "../../styled-components/card-link";

// SVG Icons
import emailIcon from "../../../assets/email.svg";

function EmailInfo({ emails, ...props }) {
    return (
        Array.isArray(emails) && (
            <div className="d-sm-inline-block align-baseline-top m-3" {...props}>
                <CardIconSubHeading
                    iconSrc={emailIcon} 
                    heading={emails.length > 1 ? "Emails" : "Email"} 
                />
                {emails.map( (email, idx) => (
                    <CardLink key={idx} href={`mailto:${email}`} content={email} />
                ))}
            </div>
        )
    );
 }

export default EmailInfo;