import React from "react";
import SearchResults from "./search-results";

import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../__mocks__/console.mock";

const calendarEvent = {
    title: "Calendar Test",
    invitees: ["Test Guest"],
    date: "01/01/2020 - 10:00:00 AM"
};
const contactInfo = {
    name: "Jorge L. Garcia",
    company: "Neeva",
    emails: ["me@jorgegarcia.co"],
    phones: ["555-555-5555"],
    lastContact: "01/01/2020 - 4:00:00 PM"
};
const dropboxDoc = {
    title: "Dropbox Test",
    path: "/test/path/dropbox.json",
    sharedWith: ["me@jorgegarcia.co"],
    created: "01/01/2020 - 4:00:00 PM"
};

const slackMsg = {
    channel: "test-channel",
    author: "jorgelgarcia",
    message: "This is a test.",
    createdAt: "01/01/2020 - 9:00:00 AM"
};

const tweetMsg = {
    user: "@jorgelgarcia",
    message: "This is a test.",
    createdAt: "01/01/2020 - 9:00:00 AM"
};

const props = {
    results: {
        calendar: [calendarEvent],
        contact: [contactInfo],
        dropbox: [dropboxDoc],
        slack: [slackMsg],
        tweet: [tweetMsg]
    }
};

describe("SearchResults: Test visual of component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount( <SearchResults {...props} /> );
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("contains correct number of children", () => {
        expect(wrapper.find("section").first().children().length).toEqual(5);
    });

    it("contains correct search result list headings", () => {
        const expected = [
            expect.stringMatching("Calendar"),
            expect.stringMatching("Contact"),
            expect.stringMatching("Dropbox"),
            expect.stringMatching("Slack"),
            expect.stringMatching("Tweet")
        ];
        expect(
            wrapper.find("[data-testid='list-heading']").length
        ).toEqual(expected.length);

        wrapper.find("[data-testid='list-heading']").forEach( (node, idx) => {
            expect(node.text()).toEqual(expected[idx]);
        });
    });

    it("contains correct search result card headings", () => {
        const expected = [
            expect.stringMatching(props.results.calendar[0].title),
            expect.stringMatching(props.results.contact[0].name),
            expect.stringMatching(props.results.dropbox[0].title),
            expect.stringMatching(props.results.slack[0].author),
            expect.stringMatching(props.results.tweet[0].user),
        ];
        expect(
            wrapper.find("[data-testid='card-heading']").length
        ).toEqual(expected.length);

        wrapper.find("[data-testid='card-heading']").forEach( (node, idx) => {
            expect(node.text()).toEqual(expected[idx]);
        });
    });

    it("contains correct search result card footers", () => {
        const expected = [
            expect.stringMatching(props.results.calendar[0].date),
            expect.stringMatching(props.results.contact[0].lastContact),
            expect.stringMatching(props.results.dropbox[0].created),
            expect.stringMatching(props.results.slack[0].createdAt),
            expect.stringMatching(props.results.tweet[0].createdAt),
        ];

        // Removes bootstrap Card.Footer elements
        const footerDivs = wrapper
            .find("[data-testid='card-footer']")
            .filterWhere(node => node.type() === "div");

        expect(footerDivs.length).toEqual(expected.length);

        footerDivs.forEach( (node, idx) => {
            expect(node.text()).toEqual(expected[idx]);
        });
    });
});


describe("SearchResults: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        mount( <SearchResults {...props} /> );
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when correct prop type is not provided", () => {
        const localResults = Object.assign({}, props.results);
        delete localResults.tweet;

        mount( <SearchResults results={localResults} /> );

        // Prop validation throws two errors. One from SearchResults
        // component and another from TweetList subcomponent
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });
});