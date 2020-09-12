import React from "react";
import DropboxCard from "../subcomponents/dropbox-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";

function DropboxList({ documents }) {
    if (Array.isArray(documents) && documents.length > 0) {
        return (
            <>
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
            </>
        );
    } else {
        return null;
    }
}

export default DropboxList;