import React from "react";

// Styled components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// CSS styles
import "./search-bar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            hover: false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onHover = this.onHover.bind(this);
    }

    // TODO: Implement
    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.search);
    }

    onChange(e) {
        this.setState( { [e.target.name]: e.target.value });
    }
    
    onHover(e) {
        this.setState( prevState => ({ hover: !prevState.hover }));
    }

    render() {
        return (
            <Container fluid className="p-3 text-center text-dark">
                <h1 className="display-4 font-weight-lighter">Acme Search</h1>
                <Form 
                    className={"mx-auto d-flex border rounded-pill" + (this.state.hover ? " shadow": "")}
                    onSubmit={this.onFormSubmit}
                 >
                    <Form.Group
                        className="flex-fill mx-3"
                        onMouseEnter={this.onHover}
                        onMouseLeave={this.onHover}
                    >
                        <Form.Control
                            className="w-100 border-0"
                            type="text"
                            name="search"
                            placeholder="Search away..."
                            onChange={this.onChange}
                            value={this.state.search}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button className="rounded-pill" type="submit" variant="outline-info">Search</Button>
                </Form>
            </Container>
        );
    }
};

// TODO: Add propTypes

export default SearchBar;