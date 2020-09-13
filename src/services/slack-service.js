import Service from "./service";

// Utilities
import utils from "../utils";

// JSON data
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
class SlackService extends Service {
    getMatching(query) {
        let filtered = super.getMatching(query);
        return this.normalize(filtered);
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