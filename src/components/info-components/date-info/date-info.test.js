import React from "react";
import DateInfo from "./date-info";

import { shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    title: "Test Title",
    date: "09/14/2020 - 11:00:00 AM",
};

describe("DateInfo: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<DateInfo title={props.title} date={props.date} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it("displays correct title and date", () => {
        expect(wrapper.find("h5").first().text()).toEqual(props.title);
        expect(wrapper.find("p").first().text()).toEqual(props.date);
    });
});

describe("DateInfo: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        shallow(<DateInfo {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });
    
    it("throws an error when title prop is missing", () => {
        shallow(<DateInfo date={props.date} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
  
    it("throws an error when date prop is missing", () => {
        shallow(<DateInfo title={props.title} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
    
    it("throws an error when props are not of type `string`", () => {
        shallow(<DateInfo title={0} date={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });
});