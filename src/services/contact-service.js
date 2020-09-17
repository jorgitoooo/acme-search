import Service from "./service";

// Utilities
import utils from "../utils";

// JSON data
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
class ContactService extends Service {
    getMatching(query) {
        let filtered = super.getMatching(query);
        return this.normalize(filtered);
    }

    normalize(contacts) {
        return contacts.map(contact => ({
                id: contact.id,
                name: contact.name,
                company: contact.company,
                emails: contact.emails,
                phones: contact.phones,
                lastContact: utils.date.createDateStr(new Date(contact.last_contact)),
            }));
    }
}

export default new ContactService(data.contacts);