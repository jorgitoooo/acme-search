import React from "react";

// Subcomponents
import DateInfo from "../date-info";

// Styled components
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// SVG icons
import slackHashIcon from "../../../assets/slack-hash.svg";
import messageCircleIcon from "../../../assets/message-circle.svg";

function SlackCard( { channel, author, message, createdAt, ...props } ) {
    return (
        <Card className="shadow calendar-card" bg="white" { ...props }>
            <Card.Body>
                <h3 className="font-weight-bold">{author}</h3>
                { channel && (
                    <div>
                        <div className="d-flex justify-content-center align-items-center mb-1">
                            <Image src={slackHashIcon} width={30}/>
                            <h5 className="font-weight-bold mb-0 ml-1">Channel</h5>
                        </div>
                        <p className="text-muted">{channel}</p>
                    </div>
                )}
                { message && (
                    <div>
                        <div className="d-flex justify-content-center align-items-center mb-1">
                            <Image src={messageCircleIcon} width={30}/>
                            <h5 className="font-weight-bold mb-0 ml-1">Message</h5>
                        </div>
                        <p className="text-muted mb-0">{message}</p>
                    </div>
                )}
            </Card.Body>
            <Card.Footer className="bg-white">{createdAt && <DateInfo title={"Sent"} date={createdAt} />}</Card.Footer>
        </Card>
    );
}

export default SlackCard;