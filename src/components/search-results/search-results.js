import React, { useEffect, useState } from "react";
import CalendarList from "../calendar-list";
import ContactList from "../contact-list";
import DropboxList from "../dropbox-list";

// Services
import services from "../../services";

// CSS styles
import "./search-resutls.css";

function SearchResults({ query, ...props }) {
    const [results, setResults] = useState(null);

    useEffect(() => {
        if (query || Object.is({}, query)) {
            const calendarFiltered = services.calendar.getMatching(query);
            const contactsFiltered = services.contact.getMatching(query);
            const dropboxFiltered = services.dropbox.getMatching(query);
            const slackFiltered = services.slack.getMatching(query);
            const tweetFiltered = services.tweet.getMatching(query);

            setResults({
                calendar: calendarFiltered,
                contacts: contactsFiltered,
                dropbox: dropboxFiltered,
                slack: slackFiltered,
                tweet: tweetFiltered,
            });
        }
    }, [query]);

    if (results) {
        // DEV
        const slackList = results.slack.map((res, idx) => <li key={idx}>slack: {res.author}</li>);
        const tweetList = results.tweet.map((res, idx) => <li key={idx}>tweet: {res.user}</li>);
        return (
            <section className="results mx-auto text-center" {...props}>
                <CalendarList calendar={results.calendar} />
                <ContactList contacts={results.contacts} />
                <DropboxList documents={results.dropbox} />

                { slackList }
                { tweetList }
            </section>
        );
    } else {
        return null;
        // return <p {...props} >No results...</p>
    }
}

export default SearchResults;