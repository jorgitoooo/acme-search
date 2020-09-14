import React from "react";
import PropTypes from "prop-types";

// Subcomponents
import DropboxCard from "../../card-components/dropbox-card";

// Styled components
import ListGroup from "react-bootstrap/ListGroup";
import ListContainer from "../../styled-components/list-container";
import ListHeading from "../../styled-components/list-heading";

// Wrapper components
import ArrayConditionalWrapper from "../../wrappers/array-conditional-wrapper";

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

DropboxList.propTypes = {
    documents: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        sharedWith: PropTypes.arrayOf(PropTypes.string),
        created: PropTypes.string.isRequired,
    }))
};

export default DropboxList;