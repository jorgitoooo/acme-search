import React from "react";
import CalendarCard from "../subcomponents/calendar-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

function CalendarList({ calendar }) {
    if (Array.isArray(calendar) && calendar.length > 0) {
        return (
            <>
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
            </>
        );
    } else {
        return null;
    }
}

export default CalendarList;