import React from "react";
import SlackCard from "./slack-card";

import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    channel: "test-channel",
    author: "jorgelgarcia",
    message: "This is a test.",
    createdAt: "01/01/2020 - 9:00:00 AM"
};

describe("SlackCard: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SlackCard {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        // console.log(wrapper.debug());
    });

    it("displays the props correctly", () => {
        expect(wrapper.find("[data-testid='card-heading']").first().text()).toEqual(props.author);
        expect(wrapper.find("[data-testid='card-info'] h5").at(0).text()).toEqual("Channel");
        expect(wrapper.find("[data-testid='card-info'] p").at(0).text()).toEqual(props.channel);
        expect(wrapper.find("[data-testid='card-info'] h5").at(1).text()).toEqual("Message");
        expect(wrapper.find("[data-testid='card-info'] p").at(1).text()).toEqual(props.message);
        expect(wrapper.find("[data-testid='card-footer'] h5").first().text()).toEqual("Sent");
        expect(wrapper.find("[data-testid='card-footer'] p").first().text()).toEqual(props.createdAt);
    });
});


describe("SlackCard: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        mount(<SlackCard {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    // What is stated below applies to the remaining test cases in this describe block:
    //      console.error is called twice for each prop validator that fails because
    //      there are two components that use each failing prop. This means that if
    //      two props fail we have four errors.

    it("throws an error for each prop that is not provided", () => {
        mount(<SlackCard />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(8);
    });

    it("throws an error when author prop is not of type `string`", () => {
        const { channel, message, createdAt } = props;
        mount(<SlackCard author={1} channel={channel} message={message} createdAt={createdAt} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when channel prop is not of type `string`", () => {
        const { author, message, createdAt } = props;
        mount(<SlackCard author={author} channel={1} message={message} createdAt={createdAt} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(3);
    });

    it("throws an error when message prop is not of type `string`", () => {
        const { channel, author, createdAt } = props;
        mount(<SlackCard author={author} channel={channel} message={1} createdAt={createdAt} />);

        // SPECIAL CASE
        // The spy would normally be called 2 times but since slack-card uses
        // card-info twice and card-info has already previously thrown an error
        // there is only one error message thrown for the missing content prop
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it("throws an error when createdAt prop is not of type `string`", () => {
        const { channel, author, message } = props;
        mount(<SlackCard author={author} channel={channel} message={message} createdAt={1} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });
});