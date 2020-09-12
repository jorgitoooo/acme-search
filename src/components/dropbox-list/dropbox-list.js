import React from "react";
import DropboxCard from "../subcomponents/dropbox-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

// Wrapper components
import ArrayConditionalWrapper from "../wrappers/array-conditional-wrapper";

function DropboxList({ documents }) {
    return (
        <ArrayConditionalWrapper array={documents}>
            <h1 className="font-weight-bold">Dropbox</h1>
            <ListGroup as="ul">
                {documents && (
                    documents.map( (document, idx) => (
                            <ListGroup.Item as="li" key={idx}>
                                <DropboxCard 
                                    title={document.title}
                                    path={document.path}
                                    sharedWith={document.sharedWith}
                                    created={document.created}
                                />
                            </ListGroup.Item>
                    )
                ))}
            </ListGroup>
        </ArrayConditionalWrapper>
        );
}

export default DropboxList;