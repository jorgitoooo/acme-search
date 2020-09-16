import React from "react";
import EmailInfo from "./email-info";

import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

const props = {
    emails: ["test1@test.com, test2@test.com"],
};

describe("EmailInfo: Test visual components", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<EmailInfo {...props} />);
    });

    it("renders correctly", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    // it("displays correct title and date", () => {
    //     expect(wrapper.find("h5").first().text()).toEqual(props.title);
    //     expect(wrapper.find("p").first().text()).toEqual(props.date);
    // });
});

// describe("EmailInfo: Test prop type validation", () => {
//     let consoleErrorSpy;
//     beforeEach(() => {
//         console.error = jest.fn()
//         consoleErrorSpy = jest.spyOn(console, "error");
//     });

//     afterEach(() => {
//         // It's best practice to clear spied function after every test run.
//         // https://stackoverflow.com/questions/43245040/
//         //   using-jest-to-spy-on-method-call-in-componentdidmount/43284406#43284406
//         consoleErrorSpy.mockClear();
//     });
    
//     it("throws an error when title prop is missing", () => {
//         mount(<EmailInfo date={props.date} />);
//         expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
//     });
  
//     it("throws an error when date prop is missing", () => {
//         mount(<EmailInfo title={props.title} />);
//         expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
//     });
// });
