import React from "react";
import SlackCard from "../subcomponents/slack-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function SlackList({ messages }) {
    return (
        <ArrayConditionalWrapper array={messages}>
            <h1 className="font-weight-bold">Slack</h1>
            <ListGroup as="ul">
                {messages && (
                    messages.map( (message, idx) => (
                            <ListGroup.Item as="li" key={idx}>
                                <SlackCard 
                                    author={message.author}
                                    channel={message.channel}
                                    message={message.message}
                                    createdAt={message.createdAt}
                                />
                            </ListGroup.Item>
                    )
                ))}
            </ListGroup>
        </ArrayConditionalWrapper>
    );
}

export default SlackList;