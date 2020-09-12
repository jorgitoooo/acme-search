import React from "react";
import TweetCard from "../subcomponents/tweet-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../styled-components/list-container";
import ListHeading from "../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function TweetList({ tweets }) {
    return (
        <ArrayConditionalWrapper array={tweets}>
            <ListContainer>
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

export default TweetList;