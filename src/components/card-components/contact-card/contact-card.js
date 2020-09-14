import React from "react";
import PropTypes from "prop-types";

// Subcomponents
import DateInfo from "../../subcomponents/date-info";
import EmailInfo from "../../subcomponents/email-info";
import PhoneInfo from "../../subcomponents/phone-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";
import CardSubHeading from "../../styled-components/card-subheading";

/* Contact Schema {
        "name": String,
        "company": String,
        "emails": [String],
        "phones": [String],
        "lastContact": String
    }
 */

function ContactCard({name, company, emails, phones, lastContact, ...props}) {
    return (
        <Card { ...props } className="shadow" bg="white">
            <Card.Body>
                <CardHeading heading={name} />
                {company && <CardSubHeading heading={company} />}
                {emails && <EmailInfo emails={emails} />}
                {phones && <PhoneInfo phones={phones} />}
            </Card.Body>
            <Card.Footer className="bg-white">{lastContact
                ? <DateInfo title={"Last Contacted"} date={lastContact} />
                : <p className="text-muted">You have never contacted {name}.</p>}</Card.Footer>
        </Card>
    );
}

ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    company: PropTypes.string,
    emails: PropTypes.arrayOf(PropTypes.string),
    phones: PropTypes.arrayOf(PropTypes.string),
    lastContact: PropTypes.string
};

export default ContactCard;