import React from "react";
import PropTypes from "prop-types";

// Components
import CalendarList from "../calendar-list";
import ContactList from "../contact-list";
import DropboxList from "../dropbox-list";
import SlackList from "../slack-list";
import TweetList from "../tweet-list";

// CSS styles
import "./search-resutls.css";

function SearchResults({ results, ...props }) {
    if (results) {
        return (
            <section className="results mx-auto text-center" {...props}>
                <CalendarList calendar={results.calendar} />
                <ContactList contacts={results.contact} />
                <DropboxList documents={results.dropbox} />
                <SlackList messages={results.slack} />
                <TweetList tweets={results.tweet} />
            </section>
        );
    } else {
        return null;
    }
}

SearchResults.propTypes = {
    results: PropTypes.object,
};

export default SearchResults;