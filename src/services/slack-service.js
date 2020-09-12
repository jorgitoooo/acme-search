import queryService from "./query-service";
import data from "../data/slack.json";

/** 
    Slack Schema: [
        {
            "id": String,
            "channel": String,
            "author": String,
            "message": String,
            "timestamp": Date,
            "matching_terms": [String],
        },
    ]
*/
class SlackService {
    constructor() {
        this.slack = data.slack || [];
    }
    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.slack.filter(msg => (
                queryService.queryMatch(msg, query)
            ));
        }
        return filtered;
    }
}

export default new SlackService();