import { render } from "@testing-library/react";
import React from "react";
import CharsPage, { Props } from "./chars.page";

describe("Home", () => {
  const defaultProps: Props = {};

  it("should render", () => {
    const props = { ...defaultProps };
    const { asFragment, queryByText } = render(<CharsPage {...props} />);

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Home")).toBeTruthy();
  });
});
