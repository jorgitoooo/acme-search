import React from "react";

// Subcomponents
import DateInfo from "../date-info";
import SharedWithInfo from "../shared-with-info";

// Styled components
import Card from "react-bootstrap/Card";

function DropboxCard({title, path, sharedWith, created, ...props}) {
    return (
        <Card { ...props } className="shadow-sm calendar-card" bg="white">
            <Card.Body>
                <h4 className="font-weight-bold">{title}</h4>
                {created && <DateInfo title={"Created"} date={created} />}
                { sharedWith && <SharedWithInfo sharedWith={sharedWith} />}
            </Card.Body>
        </Card>
    );
}

export default DropboxCard;