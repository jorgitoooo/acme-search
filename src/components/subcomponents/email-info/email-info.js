import React from "react";

// Styled components
import Image from "react-bootstrap/Image";

// SVG Icons
import emailIcon from "../../../assets/email.svg";

function EmailInfo({ emails, ...props }) {
    return (
        emails && Array.isArray(emails) && (
            <div className="d-sm-inline-block align-baseline-top m-3" {...props}>
                <div className="d-flex justify-content-center align-items-center mb-2">
                    <Image src={emailIcon} width={30} />
                    <h5 className="mb-0 ml-1">{emails.length > 1 ? "Emails" : "Email"}</h5>
                </div>
                {emails.map( (email, idx) => (
                    <a href={`mailto:${email}`} key={idx} className="text-muted mb-0 d-block">{email}</a>)
                )}
            </div>
        )
    );
 }

export default EmailInfo;