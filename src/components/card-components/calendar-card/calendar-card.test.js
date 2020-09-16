import React from "react";
import CalendarCard from "../calendar-card";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    title: "Calendar Test",
    invitees: ["Test Guest"],
    date: "01/01/2020 - 10:00:00 AM"
};

describe("CalendarCard: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<CalendarCard {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        // console.log(wrapper.debug());
    });

    it("displays sets the props correctly", () => {
        expect(wrapper.find("[data-testid='card-heading']").first().text()).toEqual(props.title);
        expect(wrapper.find("[data-testid='guest-info'] span").first().text()).toEqual(props.invitees[0]);
    });
});


describe("CalendarCard: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });
    
    it("does not throw an error when props are provided", () => {
        shallow(<CalendarCard {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("does not throw an error when invitees prop is not provided", () => {
        const { 
            title,
            date
        } = props;
        shallow(<CalendarCard title={title} date={date} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    // What is stated below applies to the remaining test cases in this describe block:
    //      console.error is called twice for each prop validator that fails because
    //      there are two components that use each failing prop. This means that if
    //      two props fail we have four errors.

    it("throws an error when date prop is not provided", () => {
        const { 
            title,
            invitees,
        } = props;
        shallow(<CalendarCard title={title} invitees={invitees} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when title prop is not provided", () => {
        const { 
            invitees,
            date
        } = props;
        shallow(<CalendarCard date={date} invitees={invitees} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when either title or date prop are not of type `string`", () => {
        shallow(<CalendarCard title={0} date={0}  />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(4);
    });

    it("throws an error when invitees prop is not an array of type `string`", () => {
        const { 
            title,
            date
        } = props;
        shallow(<CalendarCard title={title} invitees={[0,2]} date={date} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });
});
