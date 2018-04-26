import React from "react";
import { shallow } from "enzyme";
import { Comment } from "./Comments";

describe("Comment", () => {
  it("renders user name", () => {
    const component = shallow(<Comment user="me" />);
    const name = component.find(".comment_user").text();
    expect(name).toBe("me");
  });

  it("hides comment on button click", () => {
    const component = shallow(<Comment user="me" />);
    const button = component.find("button")
    button.simulate("click")
    expect(component.find("p")).toHaveLength(0)
  })
});
