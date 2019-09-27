import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Headlines from "./index";
import { findByTestAttr } from "../../../Utils/index";
import checkPropTypes from 'check-prop-types'

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Headlines {...props} />);
  return component;
};

describe("Headlines component", () => {


  describe('Checking PropTypes ', () => {

    it('It should thorugh warning', () => {

      const expectedProps = {

        header: 'The header',
        desc: 'Test desc',
        tempArr: [{

          fName: 'Test Fname',
          lName: 'Test Lname',
          email: 'test@gmail.com',
          age: 24,
          onlineStatus: false
        }]
      }

      const propError  = checkPropTypes(Headlines.propTypes, expectedProps,'props', Headlines.name)
      expect(propError).toBeUndefined()
    })

  })

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

    it('Should render a h1', () => {
        const h1 = findByTestAttr(wrapper, 'header');
        expect(h1.length).toBe(1);
    })

    it('Should render a desc', () => {
        const desc = findByTestAttr(wrapper, 'desc');
        expect(desc.length).toBe(1);
    })
  });


  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
  

      wrapper = setUp();
    });


    it('Should not render', () => {

        const component = findByTestAttr(wrapper,'headlineComponent');
    })
  });
});
