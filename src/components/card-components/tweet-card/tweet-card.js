import React from "react";
import PropTypes from "prop-types";

// Info components
import DateInfo from "../../info-components/date-info";

// Styled components
import Card from "react-bootstrap/Card";
import CardInfo from "../../styled-components/card-info";
import CardHeading from "../../styled-components/card-heading";

// SVG icons
import twitterIcon from "../../../assets/twitter.svg";

function TweetCard( { user, message, createdAt, ...props } ) {
    return (
        <Card className="shadow calendar-card" bg="white" { ...props }>
            <Card.Body>
                <CardHeading data-testid="card-heading" heading={user} />
                <CardInfo 
                    data-testid="card-info"
                    iconSrc={twitterIcon}
                    heading={"Message"}
                    content={message}
                />
            </Card.Body>
            <Card.Footer data-testid="card-footer" className="bg-white">
                <DateInfo title={"Tweeted"} date={createdAt} />
            </Card.Footer>
        </Card>
    );
}

TweetCard.propTypes = {
    user: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
};

export default TweetCard;