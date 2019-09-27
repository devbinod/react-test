import React, { Component } from "react";

import { findByTestAttr, checkProps } from "../../../Utils/index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SharedButton from "./index";
configure({ adapter: new Adapter() });

describe("SharedButton Component ", () => {
  describe("Checking PropTypes ", () => {
    it("Should not through a warning ", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };

      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Renders ", () => {
    let wrappers;
    let muckFun;
    beforeEach(() => {
      muckFun = jest.fn();
      const props = {
        buttonText: "Example Button Text",
        emitEvent: muckFun
      };
      wrappers = shallow(<SharedButton {...props} />);
    });

    it("Should render a button ", () => {
      const button = findByTestAttr(wrappers, "buttonComponent");
      expect(button.length).toBe(1);
    });

    it("Should emit callback on click event ", () => {
      const button = findByTestAttr(wrappers, "buttonComponent");
      button.simulate("click");
      const callback = muckFun.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
