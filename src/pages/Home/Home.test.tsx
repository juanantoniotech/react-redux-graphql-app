import { render } from "@testing-library/react";
import React from "react";
import HomePage, { Props } from "./home.page";

describe("Home", () => {
  const defaultProps: Props = {};

  it("should render", () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<HomePage {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Home")).toBeTruthy();
  });
});
