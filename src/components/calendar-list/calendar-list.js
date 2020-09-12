import React from "react";
import CalendarCard from "../subcomponents/calendar-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function CalendarList({ calendar }) {
    return (
        <ArrayConditionalWrapper array={calendar}>
            <h1 className="font-weight-bold">Calendar</h1>
                <ListGroup as="ul">
                    {calendar && (
                        calendar.map( (event, idx) => (
                                <ListGroup.Item as="li" key={idx}>
                                    <CalendarCard 
                                        title={event.title}
                                        invitees={event.invitees}
                                        date={event.date}
                                    />
                                </ListGroup.Item>
                        )
                    ))}
                </ListGroup>
        </ArrayConditionalWrapper>
    );
}

export default CalendarList;