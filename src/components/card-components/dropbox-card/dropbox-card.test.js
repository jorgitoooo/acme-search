import React from "react";
import DropboxCard from "./dropbox-card";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../../__mocks__/console.mock";

const props = {
    title: "Dropbox Test",
    path: "/test/path/dropbox.json",
    sharedWith: ["me@jorgegarcia.co"],
    created: "01/01/2020 - 4:00:00 PM"
};

describe("DropboxCard: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<DropboxCard {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
        // console.log(wrapper.debug());
    });

    it("displays the props correctly", () => {
        expect(wrapper.find("[data-testid='card-heading']").first().text()).toEqual(props.title);
        expect(wrapper.find("[data-testid='path-info'] h5").first().text()).toEqual("Path");
        expect(wrapper.find("[data-testid='path-info'] p").first().text()).toEqual(props.path);
        expect(wrapper.find("[data-testid='shared-with-info'] h5").first().text()).toEqual("Shared with");
        expect(wrapper.find("[data-testid='shared-with-info'] a").first().text()).toEqual(props.sharedWith[0]);
        expect(wrapper.find("[data-testid='card-footer'] h5").first().text()).toEqual("Created");
        expect(wrapper.find("[data-testid='card-footer'] p").first().text()).toEqual(props.created);
    });
});


describe("DropboxCard: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when props are provided", () => {
        shallow(<DropboxCard {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("does not throw an error when sharedWith prop is not provided", () => {
        const { title, path, created } = props;
        shallow(<DropboxCard title={title} path={path} created={created} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    // What is stated below applies to the remaining test cases in this describe block:
    //      console.error is called twice for each prop validator that fails because
    //      there are two components that use each failing prop. This means that if
    //      two props fail we have four errors.

    it("throws an error when title prop is not of type `string`", () => {
        const { path, created } = props;
        shallow(<DropboxCard title={1} path={path} created={created} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when path prop is not of type `string`", () => {
        const { title, created } = props;
        shallow(<DropboxCard title={title} path={1} created={created} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when created prop is not of type `string`", () => {
        const { title, path } = props;
        shallow(<DropboxCard title={title} path={path} created={1} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });

    it("throws an error when sharedWith prop is not an arrays of type `string`", () => {
        const { title, path, created } = props;
        shallow(<DropboxCard title={title} path={path} created={created} sharedWith={[0,1]} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
    });
});