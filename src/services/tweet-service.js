import queryService from "./query-service";
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
    constructor() {
        this.tweets = data.tweet || [];
    }
    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.tweets.filter(twt => (
                queryService.queryMatch(twt, query)
            ));
        }
        return filtered;
    }
}

export default new TweetService();