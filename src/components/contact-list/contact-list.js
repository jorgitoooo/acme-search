import React from "react";
import ContactCard from "../subcomponents/contact-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function ContactList({ contacts }) {
    return (
        <ArrayConditionalWrapper array={contacts}>
            <section className="py-3">
                <h1 className="font-weight-bold">Contacts</h1>
                <ListGroup as="ul">
                    {contacts && (
                        contacts.map( contact => (
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
                    ))}
                </ListGroup>
            </section>
        </ArrayConditionalWrapper>
    );
}

export default ContactList;