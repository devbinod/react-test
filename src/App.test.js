import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import { checkProps, findByTestAttr, testStore } from "../Utils/index";
import App from "./App";
import { setupMaster } from "cluster";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  console.log(wrapper.debug());
  return wrapper;
};
describe("App component ", () => {
  let wrapper;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example title 1",
          body: "Some text"
        },
        {
          title: "Example title 2",
          body: "Some text"
        },
        {
          title: "Example title 3",
          body: "Some text"
        }
      ]
    };

    wrapper = setUp(initialState);
  });

  it("Should render without erros ", () => {
    const component = findByTestAttr(wrapper, "aps");
    expect(component.lenght).toBe(undefined);
  });
});
