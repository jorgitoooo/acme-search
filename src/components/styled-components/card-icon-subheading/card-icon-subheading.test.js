import React from "react";
import CardIconSubHeading from "../card-icon-subheading";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    iconSrc: "./test-icon.svg",
    heading: "Test Heading"
};

describe("CardIconSubHeading: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CardIconSubHeading {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("displays sets the props correctly", () => {
        expect(wrapper.find("img").first().prop("src")).toEqual(props.iconSrc);
        expect(wrapper.find("h5").first().text()).toEqual(props.heading);
    });
});

describe("CardIconSubHeading: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });
    
    it("does not throw an error when props are provided", () => {
        shallow(<CardIconSubHeading {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when heading prop is not provided", () => {
        const { 
            iconSrc,
        } = props;
        shallow(<CardIconSubHeading iconSrc={iconSrc} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it("throws an error when iconSrc prop is not provided", () => {
        const { 
            heading
        } = props;
        shallow(<CardIconSubHeading heading={heading} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });

    it("throws an error each prop that is not a `string`", () => {
        shallow(<CardIconSubHeading iconSrc={0} heading={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });
});