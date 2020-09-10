import React from "react";

// Styled components
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

// Services
import queryService from "../../services";

// CSS styles
import "./search-bar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            hover: false
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onHover = this.onHover.bind(this);
    }

    // TODO: Implement
    onFormSubmit(e) {
        e.preventDefault();
        
        const { query } = this.state;
        const { onSearch } = this.props;

        // A query should not take place if the search is
        // an empty string or whitespace.
        // if (!search || search.trim().length === 0) {
        //     this.props.onSearch(null);
        //     return;
        // }

        // const queryTerms = search.trim().split(" ");
        // const lowercaseQueryTerms = queryTerms.map(term => term.toLocaleLowerCase());
        
        onSearch( queryService.prepareQuery(query) );
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
                            name="query"
                            placeholder="Search away..."
                            onChange={this.onChange}
                            value={this.state.query}
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