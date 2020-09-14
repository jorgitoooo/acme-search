import React from "react";
import PropTypes from "prop-types";

// Subcomponents
import ContactCard from "../../card-components/contact-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../../styled-components/list-container";
import ListHeading from "../../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../../wrappers/array-conditional-wrapper";

function ContactList({ contacts }) {
    return (
        <ArrayConditionalWrapper array={contacts}>
            <ListContainer>
                <ListHeading heading={"Contacts"} />
                <ListGroup as="ul">
                    {contacts.map( contact => (
                            <ListGroup.Item as="li" key={contact.id}>
                                <ContactCard 
                                    name={contact.name}
                                    company={contact.company}
                                    emails={contact.emails}
                                    phones={contact.phones}
                                    lastContact={contact.lastContact}
                                />
                            </ListGroup.Item>
                        )
                    )}
                </ListGroup>
            </ListContainer>
        </ArrayConditionalWrapper>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        emails: PropTypes.arrayOf(PropTypes.string),
        phones: PropTypes.arrayOf(PropTypes.string),
        lastContact: PropTypes.string.isRequired,
    }))
};

export default ContactList;