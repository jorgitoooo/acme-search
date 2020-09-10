import React, { useEffect, useState } from "react";

function SearchResults({ query }) {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // TODO:
        // 1. Access data and filter it based on query
        // 2. Update `results`

        // DEV
        console.log("useEffect");
        if (query) {
            setResults([query]);
        } else {
            setResults([]);
        }

    }, [query]);

    if (results.length) {
        const resList = results.map((res, idx) => <li key={idx}>{res}</li>);
        return (
            <ul>
                {resList}
            </ul>
        );
    } else {
        return <p> No Results...</p>
    }
}

export default SearchResults;