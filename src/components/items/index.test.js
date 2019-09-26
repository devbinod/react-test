import React, { Component } from "react";

import { findByTestAttr, checkProps } from "../../../Utils/index";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ListItem from "./index";
configure({ adapter: new Adapter() });

describe(" Listing Componet ", () => {
  describe("Checking props ", () => {
    it("Should not throw a warning ", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some test"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("compoent Renders ", () => {
    let wrappers;

    beforeEach(() => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some test"
      };
      wrappers = shallow(<ListItem {...expectedProps} />);
    });

    it("Should renders without errors ", () => {
      const compoent = findByTestAttr(wrappers, "listItemComponent");
      expect(compoent.length).toBe(1);
    });

    it("Should renders a title ", () => {
      const compoent = findByTestAttr(wrappers, "compoentTitle");
      expect(compoent.length).toBe(1);
    });

    it("Should renders desc ", () => {
      const compoent = findByTestAttr(wrappers, "componentDesc");
      expect(compoent.length).toBe(1);
    });
  });

  describe("shoud not render ", () => {
    let wrappers;

    beforeEach(() => {
      const expectedProps = {
        desc: "Some test"
      };
      wrappers = shallow(<ListItem {...expectedProps} />);


    });

    it('Component should not render ', () => {

        const compoent = findByTestAttr(wrappers, 'listItemComponent');
        expect(compoent.length).toBe(0)
    })
  });
});
