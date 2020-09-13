import calendar from "./calendar-service";
import contact from "./contact-service";
import dropbox from "./dropbox-service";
import slack from "./slack-service";
import tweet from "./tweet-service";

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
    getResults(query) {
        let res = {};
        for (let service of Object.keys(this.services)) {
            console.log(service, this.services[service]);
            res[service] = this.services[service].getMatching(query);
        }
        return res;
        // console.log(res);

        // const calendarFiltered = this.services.calendar.getMatching(query);
        // const contactsFiltered = this.services.contact.getMatching(query);
        // const dropboxFiltered = this.services.dropbox.getMatching(query);
        // const slackFiltered = this.services.slack.getMatching(query);
        // const tweetsFiltered = this.services.tweet.getMatching(query);

        // return {
        //     calendar: calendarFiltered,
        //     contacts: contactsFiltered,
        //     dropbox: dropboxFiltered,
        //     slack: slackFiltered,
        //     tweets: tweetsFiltered,
        // };
    }
}

export default new MainService(services);