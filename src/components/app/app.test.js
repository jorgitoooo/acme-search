import React from 'react';
import App from './app';

import { mount } from "enzyme";
import toJson from 'enzyme-to-json';

describe("App: Test visual of component", () => {
  it('renders correctly', () => {
    expect(toJson(mount(<App />))).toMatchSnapshot();
  });
});
