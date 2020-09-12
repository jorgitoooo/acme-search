import queryService from "./query-service";
import utils from "../utils";

// JSON Date
import data from "../data/calendar.json";

/** 
    Calendar Schema: [
        {
            "id": String,
            "title": String,
            "invitees": String,
            "matching_terms": [String],
            "date": Date
        },
    ]
*/
class CalendarService {
    constructor(calendar) {
        this.calendar = calendar || [];
    }
    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.calendar.filter(event => (
                queryService.queryMatch(event, query)
            ));

            // Normalize filtered events
            filtered = this.normalize(filtered);
        }
        return filtered;
    }

    // TODO: Throw error if calendar not array ?
    normalize(calendar) {
        return calendar.map(event => {
            return {
                id: event.id,
                title: event.title,
                invitees: event.invitees.trim().split(",").map(invitee => invitee.trim()),
                date: utils.date.createDateStr(new Date(event.date)),
            };
        });
    }
}

export default new CalendarService(data.calendar);