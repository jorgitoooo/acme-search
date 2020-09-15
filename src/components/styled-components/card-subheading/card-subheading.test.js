import React from "react";
import CardSubHeading from "./card-subheading";

import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    heading: "Test Heading"
};

describe("CardSubHeading: Test visual of component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardSubHeading {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("contains correct href and content", () => {
        expect(wrapper.find("h5").first().text()).toEqual(props.heading);
    });
});

describe("CardSubHeading: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        shallow(<CardSubHeading {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when props are not of type `string`", () => {
        shallow(<CardSubHeading heading={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it("throws an error when heading prop is not provided", () => {
        shallow(<CardSubHeading />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});