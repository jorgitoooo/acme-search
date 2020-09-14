import React from "react";
import PropTypes from "prop-types";

// Subcomponents
import DateInfo from "../../subcomponents/date-info";
import GuestsInfo from "../../subcomponents/guests-info";

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
            <Card.Footer className="bg-white"><DateInfo title={"Time & Date"} date={date} /></Card.Footer>
        </Card>
    );
}

CalendarCard.propTypes = {
    title: PropTypes.string.isRequired,
    invitees: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string.isRequired
};

export default CalendarCard;