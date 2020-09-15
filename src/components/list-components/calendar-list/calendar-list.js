import React from "react";
import PropTypes from "prop-types";

// Subcomponents
import CalendarCard from "../../card-components/calendar-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../../styled-components/list-container";
import ListHeading from "../../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../../wrappers/array-conditional-wrapper";

function CalendarList({ calendar, ...props }) {
    return (
        <ArrayConditionalWrapper array={calendar}>
            <ListContainer {...props}>
                <ListHeading heading={"Calendar"} />
                <ListGroup as="ul">
                    {calendar.map( (event, idx) => (
                            <ListGroup.Item as="li" key={idx}>
                                <CalendarCard 
                                    title={event.title}
                                    invitees={event.invitees}
                                    date={event.date}
                                />
                            </ListGroup.Item>
                        )
                    )}
                </ListGroup>
            </ListContainer>
        </ArrayConditionalWrapper>
    );
}

CalendarList.propTypes = {
    calendar: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        invitees: PropTypes.arrayOf(PropTypes.string),
        date: PropTypes.string.isRequired,
    }))
};

export default CalendarList;