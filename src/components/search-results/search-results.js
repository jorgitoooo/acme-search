import React from "react";
import PropTypes from "prop-types";

// Components
import CalendarList from "../list-components/calendar-list";
import ContactList from "../list-components/contact-list";
import DropboxList from "../list-components/dropbox-list";
import SlackList from "../list-components/slack-list";
import TweetList from "../list-components/tweet-list";

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
    results: PropTypes.exact({
        calendar: PropTypes.arrayOf(PropTypes.object).isRequired,
        contact: PropTypes.arrayOf(PropTypes.object).isRequired,
        dropbox: PropTypes.arrayOf(PropTypes.object).isRequired,
        slack: PropTypes.arrayOf(PropTypes.object).isRequired,
        tweet: PropTypes.arrayOf(PropTypes.object).isRequired
    }),
};

export default SearchResults;