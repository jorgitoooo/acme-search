import React from "react";
import PropTypes from "prop-types";

// Info components
import TweetCard from "../../card-components/tweet-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../../styled-components/list-container";
import ListHeading from "../../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../../wrappers/array-conditional-wrapper";

function TweetList({ tweets, ...props }) {
    return (
        <ArrayConditionalWrapper array={tweets}>
            <ListContainer {...props}>
                <ListHeading heading={"Tweets"} />
                <ListGroup as="ul">
                    {tweets.map( (tweet, idx) => (
                            <ListGroup.Item as="li" key={idx}>
                                <TweetCard 
                                    user={tweet.user}
                                    message={tweet.message}
                                    createdAt={tweet.createdAt}
                                />
                            </ListGroup.Item>
                        )
                    )}
                </ListGroup>
            </ListContainer>
        </ArrayConditionalWrapper>
    );
}

TweetList.propTypes = {
    tweets: PropTypes.arrayOf(PropTypes.exact({
        user: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }))
};

export default TweetList;