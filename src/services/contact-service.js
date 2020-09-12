import queryService from "./query-service";
import utils from "../utils";
import data from "../data/contacts.json";

/** 
    Contact Schema: [
        {
            "id": String,
            "name": String,
            "company": String,
            "emails": [String],
            "phones": [String],
            "matching_terms": [String],
            "last_contact": Date
        },
    ]
*/
class ContactService {
    constructor(contacts) {
        this.contacts = contacts || [];
    }
    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.contacts.filter(contact => (
                queryService.queryMatch(contact, query)
            ));

            // Normalize filtered contacts
            filtered = this.normalize(filtered);
        }
        return filtered;
    }

    normalize(contacts) {
        return contacts.map(contact => {
            return {
                id: contact.id,
                name: contact.name,
                company: contact.company,
                emails: contact.emails,
                phones: contact.phones,
                lastContact: utils.date.createDateStr(new Date(contact.last_contact)),
            };
        });
    }
}

export default new ContactService(data.contacts);