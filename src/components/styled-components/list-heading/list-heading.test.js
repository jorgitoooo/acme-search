import React from "react";
import ListHeading from "./list-heading";

import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    heading: "Test Heading"
};

describe("ListHeading: Test visual of component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ListHeading {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("contains correct href and content", () => {
        expect(wrapper.find("h1").first().text()).toEqual(props.heading);
    });
});

describe("ListHeading: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        shallow(<ListHeading {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when props are not of type `string`", () => {
        shallow(<ListHeading heading={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it("throws an error when heading prop is not provided", () => {
        shallow(<ListHeading />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});