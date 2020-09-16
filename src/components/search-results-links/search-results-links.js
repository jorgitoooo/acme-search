import React from "react";

// Utilities
import utils from "../../utils";

// CSS styles
import "./search-results-links.css";

function SearchResultsLinks({ results }) {
    function trackClick(e) {
        utils.analytics.clickEvent(`user clicked search result link ${e.target.hash}`);
    }

    if (results) {
      return(
        <div className="d-flex flex-wrap justify-content-center">
            {Object.keys(results).map(key => {
                if (results[key].length > 0) {
                  return (
                    <a
                      key={key}
                      href={`#${key}`}
                      className="m-1 py-1 px-2 badge badge-pill badge-secondary shadow badge-md"
                      onClick={trackClick}
                    >
                      {key}
                    </a>
                  );
                  // return (
                  //   <a 
                  //     href={`#${key}`}
                  //     className="m-1 py-1 px-2 bg-secondary shadow rounded-pill text-white"
                  //   >
                  //     {key}
                  //   </a>
                  // );
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