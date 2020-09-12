import React from "react";
import CalendarCard from "../subcomponents/calendar-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../styled-components/list-container";
import ListHeading from "../styled-components/list-heading";


// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function CalendarList({ calendar }) {
    return (
        <ArrayConditionalWrapper array={calendar}>
            <ListContainer>
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

export default CalendarList;