import React from "react";

// Subcomponents
import DateInfo from "../date-info";
import SharedWithInfo from "../shared-with-info";

// Styled components
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

// SVG icons
import fileIcon from "../../../assets/file.svg";

function DropboxCard({title, path, sharedWith, created, ...props}) {
    return (
        <Card { ...props } className="shadow calendar-card" bg="white">
            <Card.Body>
                <h4 className="font-weight-bold">{title}</h4>
                { path && (
                    <div>
                        <div className="d-flex justify-content-center align-items-center mb-2">
                            <Image src={fileIcon} width={20}/>
                            <h5 className="font-weight-bold mb-0 ml-1">Path</h5>
                        </div>
                        <p className="text-muted mb-0">{path}</p>
                    </div>
                )}
                { sharedWith && <SharedWithInfo emails={sharedWith} />}
            </Card.Body>
            <Card.Footer className="bg-white">{created && <DateInfo title={"Created"} date={created} />}</Card.Footer>
        </Card>
    );
}

export default DropboxCard;