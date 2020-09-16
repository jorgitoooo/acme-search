import React from "react";

import SearchBar from "./search-bar";

import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

// Mocks
import { consoleErrorFn } from "../../__mocks__/console.mock";
import SearchBarMock from "../../__mocks__/search-bar.mock";

const query = "Test Query";
const preppedQuery = ["test query", "test", "query"];
const props = {
    onSearch: ( preppedQuery ) => preppedQuery
};

describe("SearchBar: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SearchBar {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it("displays correct title and search button", () => {
        expect(wrapper.find("h1").first().text()).toEqual("ACME Search");
        expect(wrapper.find("Button").first().text()).toEqual("Search");
    });

    it("displays correct query", () => {
        expect(wrapper.find("[name='query']").first().prop("value")).toEqual("");

        wrapper
            .find("[name='query']")
            .first()
            .simulate("change", { target: { name: "query", value: query } });
        
        expect(wrapper.find("[name='query']").first().prop("value")).toEqual(query);
    });

    it("displays shadow when mouse is over search bar", () => {
        expect(wrapper.state("hover")).toBe(false);

        wrapper
            .find("FormGroup")
            .first()
            .simulate("mouseenter");
        expect(wrapper.state("hover")).toBe(true);

        // Update wrapper to include the changed state
        wrapper.update();
        expect(wrapper.find("form").hasClass("shadow")).toBe(true);
    });
});

describe("SearchBar: Test correct submission functionality", () => {
    it("calls the onSearch prop when a query is submitted", () => {
        // Ignores ReactGA specific warning
        console.warn = () => void 0;

        const onSearchFn = jest.fn();
        const wrapper = mount(<SearchBar onSearch={onSearchFn} />);

        // Submit empty query
        wrapper.find("form").first().prop("onSubmit")({ preventDefault: () => void 0 });

        // onSearch should not be called on an empty query
        expect(onSearchFn).toHaveBeenCalledTimes(0);

         // Simulate change event
         wrapper
         .find("[name='query']")
         .first()
         .simulate("change", { target: { name: "query", value: query } });
     
        expect(wrapper.find("[name='query']").first().prop("value")).toEqual(query);

        wrapper.find("form").first().prop("onSubmit")({ preventDefault: () => void 0 });
        expect(onSearchFn).toHaveBeenCalledTimes(1);
        
        // Looks at parameters passed in to the mock function
        expect(onSearchFn.mock.calls[0][0]).toEqual(preppedQuery);
    });

    // Has to be called after previous unit test because onFormSubmit is overwritten
    it("submits query when search button is clicked", () => {
        SearchBar.prototype.onFormSubmit = SearchBarMock.onFormSubmitFn;
        const formSubmitSpy = jest.spyOn(SearchBar.prototype, "onFormSubmit");
        const wrapper = mount(<SearchBar {...props} />);

        expect(wrapper.find("[name='query']").first().prop("value")).toEqual("");

        // Simulate change event
        wrapper
            .find("[name='query']")
            .first()
            .simulate("change", { target: { name: "query", value: query } });
        
        expect(wrapper.find("[name='query']").first().prop("value")).toEqual(query);

        // Simulate submit event
        wrapper.find("form").first().prop("onSubmit")( { preventDefault: () => void 0 });

        expect(formSubmitSpy).toHaveBeenCalledTimes(1);
    });
});

describe("SearchBar: Test prop type validation", () => {
    let consoleErrorSpy;
    beforeEach(() => {
        console.error = consoleErrorFn
        consoleErrorSpy = jest.spyOn(console, "error");
    });

    afterEach(() => {
        consoleErrorSpy.mockClear();
    });
    
    it("does not throw an error when props are provided", () => {
        mount(<SearchBar {...props} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(0);
    });
    
    it("throws an error when props are not provided", () => {
        mount(<SearchBar />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
    
    it("throws an error when onSearch prop is not of type `func`", () => {
        mount(<SearchBar onSearch={"not a func"} />);
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    });
});