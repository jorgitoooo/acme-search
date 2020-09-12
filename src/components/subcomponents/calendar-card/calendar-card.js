import React from "react";

// Subcomponents
import DateInfo from "../date-info";
import GuestsInfo from "../guests-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";

function CalendarCard({title, invitees, date, ...props}) {
    return (
        <Card { ...props } className="shadow calendar-card" bg="white">
            <Card.Body>
                <CardHeading heading={title} />
                { invitees && <GuestsInfo invitees={invitees} />}
            </Card.Body>
            <Card.Footer className="bg-white">{date && <DateInfo title={"Time & Date"} date={date} />}</Card.Footer>
        </Card>
    );
}

export default CalendarCard;