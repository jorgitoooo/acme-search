import calendar from "./calendar-service";
import contact from "./contact-service";
import dropbox from "./dropbox-service";
import slack from "./slack-service";
import tweet from "./tweet-service";

// Services can be easily expanded
const services = {
    calendar,
    contact,
    dropbox,
    slack,
    tweet
};

class MainService {
    constructor(services) {
        this.services = services;
    }
    getSearchResults(query) {
        let res = {};
        for (let service of Object.keys(this.services)) {
            res[service] = this.services[service].getMatching(query);
        }
        return res;
    }
}

export default new MainService(services);