import React from "react";
import PropTypes from "prop-types";

// Components
import CalendarList from "../calendar-list";
import ContactList from "../contact-list";
import DropboxList from "../dropbox-list";
import SlackList from "../slack-list";
import TweetList from "../tweet-list";

// Utilities
import utils from "../../utils";

// CSS styles
import "./search-resutls.css";

function SearchResults({ results, ...props }) {
    if (results 
          && utils.search.hasAtleastOneResult(results)) {
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