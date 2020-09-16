import React from "react";
import PropTypes from "prop-types";

// Info components
import SlackCard from "../../card-components/slack-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../../styled-components/list-container";
import ListHeading from "../../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../../wrappers/array-conditional-wrapper";

function SlackList({ messages, ...props }) {
    return (
        <ArrayConditionalWrapper array={messages}>
            <ListContainer {...props}>
                <ListHeading heading={"Slack"} />
                <ListGroup as="ul">
                    {messages.map( (message, idx) => (
                            <ListGroup.Item as="li" key={idx}>
                                <SlackCard 
                                    author={message.author}
                                    channel={message.channel}
                                    message={message.message}
                                    createdAt={message.createdAt}
                                />
                            </ListGroup.Item>
                        )
                    )}
                </ListGroup>
            </ListContainer>
        </ArrayConditionalWrapper>
    );
}

SlackList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.exact({
        author: PropTypes.string.isRequired,
        channel: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
    }))
};

export default SlackList;