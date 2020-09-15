import React from "react";
import CardHeading from "./card-heading";

import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    heading: "Test Heading",
};

describe("CardHeading: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardHeading heading={props.heading} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("displays correct heading", () => {
        expect(wrapper.find("h4").text()).toEqual(props.heading);
    });
});

describe("CardHeading: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });
    
    it("does not throw an error when props are provided", () => {
        shallow(<CardHeading {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });
    
    it("throws an error when heading prop is missing", () => {
        shallow(<CardHeading />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
  
    it("throws an error when heading prop is not a `string`", () => {
        shallow(<CardHeading heading={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
})