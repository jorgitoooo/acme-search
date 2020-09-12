import React from "react";
import DropboxCard from "../subcomponents/dropbox-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../styled-components/list-container";
import ListHeading from "../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function DropboxList({ documents }) {
    return (
        <ArrayConditionalWrapper array={documents}>
            <ListContainer>
            <ListHeading heading={"Dropbox"} />
                <ListGroup as="ul">
                    {documents.map( (document, idx) => (
                            <ListGroup.Item as="li" key={idx}>
                                <DropboxCard 
                                    title={document.title}
                                    path={document.path}
                                    sharedWith={document.sharedWith}
                                    created={document.created}
                                />
                            </ListGroup.Item>
                        )
                    )}
                </ListGroup>
            </ListContainer>
        </ArrayConditionalWrapper>
        );
}

export default DropboxList;