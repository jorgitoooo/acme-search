import React from "react";
import PropTypes from "prop-types";

// Info components
import DateInfo from "../../info-components/date-info";
import GuestsInfo from "../../info-components/guests-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";

function CalendarCard({title, invitees, date, ...props}) {
    return (
        <Card { ...props } className="shadow calendar-card" bg="white">
            <Card.Body>
                <CardHeading data-testid="card-heading" heading={title} />
                { invitees && <GuestsInfo data-testid="guest-info" invitees={invitees} />}
            </Card.Body>
            <Card.Footer data-testid="card-footer" className="bg-white">
                <DateInfo title={"Time & Date"} date={date} />
            </Card.Footer>
        </Card>
    );
}

CalendarCard.propTypes = {
    title: PropTypes.string.isRequired,
    invitees: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.string.isRequired
};

export default CalendarCard;