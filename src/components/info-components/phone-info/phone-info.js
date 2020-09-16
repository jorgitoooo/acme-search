import React from "react";
import PropTypes from "prop-types";

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
                    heading={phones.length > 1 ? "Phones" : "Phone"} 
                />
                {phones.map( (phone, idx) => (
                    <CardLink key={idx} href={`tel:${phone}`} content={phone} />
                ))}
            </div>
        )
    );
 }

 PhoneInfo.propTypes = {
    phones: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PhoneInfo;