import React from "react";

// Subcomponents
import DateInfo from "../date-info";
import PathInfo from "../path-info";
import SharedWithInfo from "../shared-with-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";

function DropboxCard({title, path, sharedWith, created, ...props}) {
    return (
        <Card { ...props } className="shadow calendar-card" bg="white">
            <Card.Body>
                <CardHeading heading={title}/>
                { path && <PathInfo path={path} /> }
                { sharedWith && <SharedWithInfo emails={sharedWith} />}
            </Card.Body>
            <Card.Footer className="bg-white">{created && <DateInfo title={"Created"} date={created} />}</Card.Footer>
        </Card>
    );
}

export default DropboxCard;