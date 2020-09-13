import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// Components
import CalendarList from "../calendar-list";
import ContactList from "../contact-list";
import DropboxList from "../dropbox-list";
import SlackList from "../slack-list";
import TweetList from "../tweet-list";

// Services
import services from "../../services";

// CSS styles
import "./search-resutls.css";

function SearchResults({ query, ...props }) {
    const [results, setResults] = useState(null);

    useEffect(() => {
        if (query) {
            const calendarFiltered = services.calendar.getMatching(query);
            const contactsFiltered = services.contact.getMatching(query);
            const dropboxFiltered = services.dropbox.getMatching(query);
            const slackFiltered = services.slack.getMatching(query);
            const tweetsFiltered = services.tweet.getMatching(query);

            setResults({
                calendar: calendarFiltered,
                contacts: contactsFiltered,
                dropbox: dropboxFiltered,
                slack: slackFiltered,
                tweets: tweetsFiltered,
            });
        }
    }, [query]);

    if (results) {
        return (
            <section className="results mx-auto text-center" {...props}>
                <CalendarList calendar={results.calendar} />
                <ContactList contacts={results.contacts} />
                <DropboxList documents={results.dropbox} />
                <SlackList messages={results.slack} />
                <TweetList tweets={results.tweets} />
            </section>
        );
    } else {
        return null;
    }
}

SearchResults.propTypes = {
    query: PropTypes.arrayOf(PropTypes.string)
};

export default SearchResults;