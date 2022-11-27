import { render } from "@testing-library/react";
import React from "react";
import Navbar, { Props } from "./navbar.component";

describe("Navbar", () => {
  const defaultProps: Props = {};

  it("should render", () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<Navbar {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Navbar")).toBeTruthy();
  });
});
