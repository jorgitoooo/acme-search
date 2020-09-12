import queryService from "./query-service";
import utils from "../utils";
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
class DropboxService { 
    constructor(documents) {
        this.documents = documents || [];
    }
    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.documents.filter(doc => (
                queryService.queryMatch(doc, query)
            ));
        }
        
        filtered = this.normalize(filtered);

        return filtered;
    }

    // TODO: Throw error if calendar not array ?
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