import React from "react";

// Styled components
import Image from "react-bootstrap/Image";

// SVG Icons
import phoneIcon from "../../../assets/phone.svg";

function PhoneInfo({ phones, ...props }) {
    return (
        phones && Array.isArray(phones) && (
            <div className="d-sm-inline-block align-baseline-top mx-3" {...props}>
                <div className="d-flex justify-content-center align-items-center mb-2">
                    <Image src={phoneIcon} width={30} />
                    <h5 className="mb-0 ml-1">{phones.length > 1 ? "Phones" : "Phone"}</h5>
                </div>
                {phones.map( (phone, idx) => (
                    <a href={`tel:${phone}`} key={idx} className="text-muted mb-0 d-block">{phone}</a>)
                )}
            </div>
        )
    );
 }

export default PhoneInfo;