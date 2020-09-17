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
    });
});