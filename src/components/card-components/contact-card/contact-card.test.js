import React from "react";
import ContactCard from "../contact-card";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    name: "Jorge L. Garcia",
    company: "Neeva",
    emails: ["me@jorgegarcia.co"],
    phones: ["555-555-5555"],
    lastContact: "01/01/2020 - 4:00:00 PM"
};

describe("ContactCard: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<ContactCard {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        // console.log(wrapper.debug());
    });

    it("displays the props correctly", () => {
        expect(wrapper.find("[data-testid='card-heading']").first().text()).toEqual(props.name);
        expect(wrapper.find("[data-testid='card-subheading']").first().text()).toEqual(props.company);
        expect(wrapper.find("[data-testid='email-info'] h5").first().text()).toEqual("Email");
        expect(wrapper.find("[data-testid='email-info'] a").first().text()).toEqual(props.emails[0]);
        expect(wrapper.find("[data-testid='phone-info'] h5").first().text()).toEqual("Phone");
        expect(wrapper.find("[data-testid='phone-info'] a").first().text()).toEqual(props.phones[0]);
        expect(wrapper.find("[data-testid='card-footer'] h5").first().text()).toEqual("Last Contacted");
        expect(wrapper.find("[data-testid='card-footer'] p").first().text()).toEqual(props.lastContact);
    });
});

describe("ContactCard: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        shallow(<ContactCard {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("does not throw an error when only name and lastContact props are provided", () => {
        const { name, lastContact } = props;
        shallow(<ContactCard name={name} lastContact={lastContact} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    // What is stated below applies to the remaining test cases in this describe block:
    //      console.error is called twice for each prop validator that fails because
    //      there are two components that use each failing prop. This means that if
    //      two props fail we have four errors.

    it("throws an error when company prop is not of type `string`", () => {
        const { name, lastContact } = props;
        shallow(<ContactCard name={name} lastContact={lastContact} company={1} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when name prop is not of type `string`", () => {
        const { lastContact } = props;
        shallow(<ContactCard name={0} lastContact={lastContact}/>);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when either emails or phones props are not arrays of type `string`", () => {
        const { name, lastContact } = props;
        shallow(<ContactCard name={name} lastContact={lastContact} emails={[0,1]} phones={[0,1]} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(4);
    });
});