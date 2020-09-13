import Service from "./service";

// Utilities
import utils from "../utils";

// JSON data
import data from "../data/dropbox.json";

/** 
    Dropbox Schema: [
        {
            "id": String,
            "path": String,
            "title": String,
            "shared_with": [String],
            "matching_terms": [String],
            created": Date
        },
    ]
*/
class DropboxService extends Service {
    getMatching(query) {
        let filtered = super.getMatching(query);
        return this.normalize(filtered);
    }

    normalize(documents) {
        return documents.map(document => {
            return {
                id: document.id,
                title: document.title,
                path: document.path,
                sharedWith: document.shared_with,
                created: utils.date.createDateStr(new Date(document.created)),
            };
        });
    }
}

export default new DropboxService(data.dropbox);