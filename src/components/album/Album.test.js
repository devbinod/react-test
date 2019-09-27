import React from "react";
import Header from "./index";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
configure({ adapter: new Adapter() });
import Album from "./index";

describe("Album component test", () => {
  const album = {
    title: "An album",
    artist: ["Binod", "Pant"],
    coverUrl: "binod.jpg",
    reviews: ["Great", "Aweseom"]
  };
  it("Display the title", () => {
    const wrapper = shallow(<Album album={album} />);
    expect(wrapper.find("h1").text()).toEqual("An album");
  });

  it("Display the artist", () => {
    const wrapper = shallow(<Album album={album} />);
    expect(wrapper.find("h2").text()).toEqual("Binod-Pant");
  });

  it("Display the cover album", () => {
    const wrapper = shallow(<Album album={album} />);
    expect(wrapper.containsMatchingElement(<img src="binod.jpg" />)).toBe(true);
  });
});
