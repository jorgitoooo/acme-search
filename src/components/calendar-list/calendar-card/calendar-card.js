import React from "react";

// Styled components
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// SVG Icons
import peopleOutlineIconSrc from "../../../assets/people-outline.svg";

// CSS styles
import "./calendar-card.css";

function Guests({ invitees }) {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center mb-2">
                <Image src={peopleOutlineIconSrc} width={30} /><h5 className="mb-0 ml-1">{invitees.length} invited</h5>
            </div>
            <div className="d-flex justify-content-center">
                {invitees.map((invitee, idx) => <Badge pill key={idx} variant="info" className="mx-1">{invitee}</Badge>)}
            </div>
        </>
    );
}

function CalendarCard({title, invitees, date, ...props}) {
    return (
        <Card { ...props } className="shadow-sm calendar-card" bg="white">
            <Card.Body>
                <h4>{title}</h4>
                {date && <p className="text-muted font-weight-bold mb-0">{date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>}
                { invitees && <Guests invitees={invitees} />}
            </Card.Body>
        </Card>
    );
}

export default CalendarCard;