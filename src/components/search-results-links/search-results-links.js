import React from "react";

function SearchResultsLinks({ results }) {
    if (results) {
      return(
        <div className="d-flex flex-wrap justify-content-center">
            {Object.keys(results).map(key => {
                if (results[key].length > 0) {
                  return <a href={`#${key}`} className="m-1 py-1 px-2 bg-secondary rounded-pill text-white">{key}</a>
                }
                return null;
              })
            }
          </div>
      );
    } else {
      return null;
    }
}

export default SearchResultsLinks;