import queryService from "./query-service";

class Service {
    constructor(data) {
        this.data = data || [];
    }

    getMatching(query) {
        let filtered = [];
        if (Array.isArray(query) && query.length > 0) {
            filtered = this.data.filter(element => (
                queryService.queryMatch(element, query)
            ));
        }
        return filtered;
    }
}

export default Service;