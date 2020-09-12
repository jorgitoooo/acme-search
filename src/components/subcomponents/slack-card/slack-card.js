import React from "react";

// Subcomponents
import DateInfo from "../date-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardInfo from "../../styled-components/card-info";

// SVG icons
import slackHashIcon from "../../../assets/slack-hash.svg";
import messageCircleIcon from "../../../assets/message-circle.svg";

function SlackCard( { channel, author, message, createdAt, ...props } ) {
    return (
        <Card className="shadow calendar-card" bg="white" { ...props }>
            <Card.Body>
                <h3 className="font-weight-bold">{author}</h3>
                { channel && (
                    <CardInfo 
                        iconSrc={slackHashIcon}
                        heading={"Channel"}
                        content={channel}
                    />
                )}
                { message && (
                    <CardInfo
                        iconSrc={messageCircleIcon}
                        heading={"Message"}
                        content={message}
                    />
                )}
            </Card.Body>
            <Card.Footer className="bg-white">
                { createdAt && <DateInfo title={"Sent"} date={createdAt} /> }
            </Card.Footer>
        </Card>
    );
}

export default SlackCard;