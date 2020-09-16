import React from "react";
import PropTypes from "prop-types";

// Info components
import DateInfo from "../../info-components/date-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardInfo from "../../styled-components/card-info";
import CardHeading from "../../styled-components/card-heading";

// SVG icons
import slackHashIcon from "../../../assets/slack-hash.svg";
import messageCircleIcon from "../../../assets/message-circle.svg";

function SlackCard( { channel, author, message, createdAt, ...props } ) {
    return (
        <Card className="shadow calendar-card" bg="white" { ...props }>
            <Card.Body>
                <CardHeading data-testid="card-heading" heading={author} />
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
            <Card.Footer data-testid="card-footer" className="bg-white">
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