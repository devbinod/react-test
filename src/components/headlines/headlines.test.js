import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Headlines from "./index";
import { findByTestAttr } from "../../../Utils/index";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Headlines {...props} />);
  return component;
};

describe("Headlines component", () => {
  describe("Have props ", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "This is test ",
        desc: "Test desc"
      };

      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });
  });
});
