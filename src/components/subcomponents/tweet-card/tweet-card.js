import React from "react";

// Subcomponents
import DateInfo from "../date-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardInfo from "../../styled-components/card-info";

// SVG icons
import twitterIcon from "../../../assets/twitter.svg";

function SlackCard( { user, message, createdAt, ...props } ) {
    return (
        <Card className="shadow calendar-card" bg="white" { ...props }>
            <Card.Body>
                <h3 className="font-weight-bold">{user}</h3>
                { message && (
                    <CardInfo 
                        iconSrc={twitterIcon}
                        heading={"Message"}
                        content={message}
                    />
                )}
            </Card.Body>
            <Card.Footer className="bg-white">
                { createdAt && <DateInfo title={"Tweeted"} date={createdAt} /> }
            </Card.Footer>
        </Card>
    );
}

export default SlackCard;