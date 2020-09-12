import React from "react";
import PropTypes from "prop-types";

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
                <CardInfo 
                    iconSrc={slackHashIcon}
                    heading={"Channel"}
                    content={channel}
                />
                <CardInfo
                    iconSrc={messageCircleIcon}
                    heading={"Message"}
                    content={message}
                />
            </Card.Body>
            <Card.Footer className="bg-white">
                <DateInfo title={"Sent"} date={createdAt} />
            </Card.Footer>
        </Card>
    );
}

SlackCard.propTypes = {
    channel: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default SlackCard;