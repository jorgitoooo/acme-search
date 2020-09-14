import React from "react";
import PropTypes from "prop-types";

// Subcomponents
import DateInfo from "../../subcomponents/date-info";
import PathInfo from "../../subcomponents/path-info";
import SharedWithInfo from "../../subcomponents/shared-with-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardHeading from "../../styled-components/card-heading";

function DropboxCard({title, path, sharedWith, created, ...props}) {
    return (
        <Card { ...props } className="shadow calendar-card" bg="white">
            <Card.Body>
                <CardHeading heading={title}/>
                <PathInfo path={path} />
                { sharedWith && <SharedWithInfo emails={sharedWith} />}
            </Card.Body>
            <Card.Footer className="bg-white"><DateInfo title={"Created"} date={created} /></Card.Footer>
        </Card>
    );
}

DropboxCard.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    sharedWith: PropTypes.arrayOf(PropTypes.string),
};

export default DropboxCard;