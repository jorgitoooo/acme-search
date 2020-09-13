import Service from "./service";
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
class CalendarService extends Service {
    getMatching(query) {
        let filtered = super.getMatching(query);
        return this.normalize(filtered);
    }

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