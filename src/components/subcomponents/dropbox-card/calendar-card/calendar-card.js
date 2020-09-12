import React from "react";

// Subcomponents
import DateInfo from "../date-info";
import Guests from "../guests";

// Styled components
import Card from "react-bootstrap/Card";

function CalendarCard({title, invitees, date, ...props}) {
    return (
        <Card { ...props } className="shadow-sm calendar-card" bg="white">
            <Card.Body>
                <h4 className="font-weight-bold">{title}</h4>
                {date && <DateInfo date={date} />}
                { invitees && <Guests invitees={invitees} />}
            </Card.Body>
        </Card>
    );
}

export default CalendarCard;