import React from "react";
import CardLink from "./card-link";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn, consoleWarnFn } from "../../../__mocks__/console.mock";

const props = {
    href: "https://github.com/garciaj92",
    content: "Test Content"
};

describe("CardLink: Test visual of component (`a` tag version)", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardLink {...props} />);
    });

    it("renders correctly", () => {
        // When href is included, CardLink is an `a` tag
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("contains correct href and content", () => {
        expect(wrapper.find("a").first().prop("href")).toEqual(props.href);
        expect(wrapper.find("a").first().text()).toEqual(props.content);
    });
});

describe("CardLink: Test clickable link (`a` tag version)", () => {
    let clickSpy;
    let wrapper;
    beforeEach(() => {
        // This is a bit of a hack
        // ReactGA throws a waring if not initialized when an event is fired
        console.warn = consoleWarnFn;
        clickSpy = jest.spyOn(console, "warn");
        wrapper = mount(<CardLink {...props} />);
    });

    afterEach(() => {
        clickSpy.mockClear();
    });

    it("clicks", () => {
        wrapper.find("a").simulate("click", { target: { href: props.href }});
        expect(clickSpy).toHaveBeenCalledTimes(1);
    });
});

describe("CardLink: Test prop type validation (`a` tag version)", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        shallow(<CardLink {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when props are not of type `string`", () => {
        shallow(<CardLink content={0} href={0} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when content prop is not provided", () => {
        shallow(<CardLink href={props.href} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});

describe("CardLink: Test visual of component (`p` tag version)", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<CardLink content={props.content} />);
    });

    it("renders correctly", () => {
        // When href is included, CardLink is an `a` tag
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("displays correct content", () => {
        expect(wrapper.find("p").first().text()).toEqual(props.content);
    });
});

describe("CardLink: Test prop type validation (`p` tag version)", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when content prop is provided", () => {
        shallow(<CardLink content={props.content} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when content prop is not of type `string`", () => {
        shallow(<CardLink content={true} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});