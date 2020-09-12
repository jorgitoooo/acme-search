import React from "react";

// Styled components
import CardIconSubHeading from "../../styled-components/card-icon-subheading";
import CardLink from "../../styled-components/card-link";

// SVG Icons
import phoneIcon from "../../../assets/phone.svg";

function PhoneInfo({ phones, ...props }) {
    return (
        Array.isArray(phones) && (
            <div className="d-sm-inline-block align-baseline-top mx-3" {...props}>
                <CardIconSubHeading
                    iconSrc={phoneIcon} 
                    heading={phones.length > 1 ? "Emails" : "Email"} 
                />
                {phones.map( (phone, idx) => (
                    <CardLink key={idx} href={`tel:${phone}`} content={phone} />
                ))}
            </div>
        )
    );
 }

export default PhoneInfo;