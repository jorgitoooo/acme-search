import React from "react";
import SearchCard from "./search-card";

import { mount, shallow } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../__mocks__/console.mock";

const props = {
    childOneTag: "div",
    childOneText: "Test Child One",
    childTwoTag: "p",
    childTwoText: "Test Child Two",
};

describe("SearchCard: Test visual of component", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <SearchCard>
                <div>{props.childOneText}</div>
                <p>{props.childTwoText}</p>
            </SearchCard>
        );
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("contains correct number of children", () => {
        expect(wrapper.find("CardBody").first().children().length).toEqual(2);
    });

    it("contains correct text value for children", () => {
        expect(wrapper.find(props.childOneTag).first().text()).toEqual(props.childOneText);
        expect(wrapper.find(props.childTwoTag).first().text()).toEqual(props.childTwoText);
    });
});


describe("SearchCard: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });

    it("does not throw an error when children are provided", () => {
        mount(
            <SearchCard>
                <div>{props.childOneText}</div>
                <p>{props.childTwoText}</p>
            </SearchCard>
        );
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });

    it("throws an error when children are not of type `element`", () => {
        shallow(<SearchCard>Error</SearchCard>);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});