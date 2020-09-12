import React from "react";
import TweetCard from "../subcomponents/tweet-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function TweetList({ tweets }) {
    return (
        <ArrayConditionalWrapper array={tweets}>
            <h1 className="font-weight-bold">Tweets</h1>
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
        </ArrayConditionalWrapper>
    );
}

export default TweetList;