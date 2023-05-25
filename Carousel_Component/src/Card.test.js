import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("render without crashing", function () {
  render(<Card />);
});

test("content should match snapshot", function () {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
