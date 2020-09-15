import React from "react";
import CardInfo from "../card-info";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    iconSrc: "./test-icon.svg",
    heading: "Test Heading",
    href: "https://github.com/garciaj92",
    content: "Test Content"
}

describe("CardInfo: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CardInfo {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("displays sets the props correctly", () => {
        expect(wrapper.find("img").first().prop("src")).toEqual(props.iconSrc);
        expect(wrapper.find("h5").first().text()).toEqual(props.heading);
        expect(wrapper.find("a").first().prop("href")).toEqual(props.href);
        expect(wrapper.find("a").first().text()).toEqual(props.content);
    });
});

describe("CardInfo: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });
    
    it("does not throw an error when props are provided", () => {
        shallow(<CardInfo {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("does not throw an error when href prop is not provided", () => {
        const { 
            iconSrc,
            heading,
            content
        } = props;
        shallow(<CardInfo iconSrc={iconSrc} heading={heading} content={content} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    // What is stated below applies to the remaining test cases in this describe block:
    //      console.error is called twice for each prop validator that fails because
    //      there are two components that use each failing prop. This means that if
    //      two props fail we have four errors.

    it("throws an error when iconSrc prop is not provided", () => {
        const { 
            heading,
            content
        } = props;
        shallow(<CardInfo heading={heading} content={content} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when heading prop is not provided", () => {
        const { 
            iconSrc,
            content
        } = props;
        shallow(<CardInfo iconSrc={iconSrc} content={content} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when content prop is not provided", () => {
        const { 
            iconSrc,
            heading,
        } = props;
        shallow(<CardInfo iconSrc={iconSrc} heading={heading} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error each prop that is not a `string`", () => {
        shallow(<CardInfo iconSrc={0} heading={0} content={0} href={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(8);
    });
});