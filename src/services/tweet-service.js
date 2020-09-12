import queryService from "./query-service";

// Utilities
import utils from "../utils";

// Data
import data from "../data/tweet.json";

/** 
    Tweet Schema: [
        {
            "user": String,
            "message": String,
            "timestamp": Date,
            "matching_terms": [String]
        },
    ]
*/
class TweetService {
    constructor(tweets) {
        this.tweets = tweets || [];
    }
    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.tweets.filter(twt => (
                queryService.queryMatch(twt, query)
            ));

            filtered = this.normalize(filtered);
        }

        return filtered;
    }

    normalize(tweets) {
        return tweets.map(tweet => {
            return {
                user: String(tweet.user).replace("@", ""),
                message: String(tweet.message),
                createdAt: utils.date.createDateStr(new Date(tweet.timestamp)),
            };
        });
    }
}

export default new TweetService(data.tweet);