import queryService from "./query-service";
import utils from "../utils";
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
    constructor(messages) {
        this.messages = messages || [];
    }

    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.messages.filter(msg => (
                queryService.queryMatch(msg, query)
            ));
            
            filtered = this.normalize(filtered);
        }


        return filtered;
    }

    normalize(messages) {
        return messages.map(msg => ({
            channel: msg.channel,
            author: msg.author,
            message: msg.message,
            createdAt: utils.date.createDateStr(new Date(msg.timestamp))
        }))
    }
}

export default new SlackService(data.slack);