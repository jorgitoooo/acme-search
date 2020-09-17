import React from "react";
import TweetCard from "./tweet-card";

import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    user: "@jorgelgarcia",
    message: "This is a test.",
    createdAt: "01/01/2020 - 9:00:00 AM"
};

describe("TweetCard: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<TweetCard {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("displays the props correctly", () => {
        expect(wrapper.find("[data-testid='card-heading']").first().text()).toEqual(props.user);
        expect(wrapper.find("[data-testid='card-info'] h5").at(0).text()).toEqual("Message");
        expect(wrapper.find("[data-testid='card-info'] p").at(0).text()).toEqual(props.message);
        expect(wrapper.find("[data-testid='card-footer'] h5").first().text()).toEqual("Tweeted");
        expect(wrapper.find("[data-testid='card-footer'] p").first().text()).toEqual(props.createdAt);
    });
});

describe("TweetCard: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        mount(<TweetCard {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    // What is stated below applies to the remaining test cases in this describe block:
    //      console.error is called twice for each prop validator that fails because
    //      there are two components that use each failing prop. This means that if
    //      two props fail we have four errors.

    it("throws an error for each prop that is not provided", () => {
        mount(<TweetCard />);
        // 7 erros because each prop is passed through 2 components which require
        // them (3*2=6), plus card-info also passes tweet-card's message prop along
        // to card-link which also requires it.
        expect(consoleErrorSpy).toHaveBeenCalledTimes(7);
    });
});