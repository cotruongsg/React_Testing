import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

test("renders without crashing", function () {
  render(<Coin />);
});

test("should match snapshot", function () {
  const { asFragment } = render(<Coin />);
  expect(asFragment()).toMatchSnapshot();
});
