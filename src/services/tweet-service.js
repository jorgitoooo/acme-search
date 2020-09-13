import Service from "./service";

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

class TweetService extends Service {
    getMatching(query) {
        let filtered = super.getMatching(query);
        return this.normalize(filtered);
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