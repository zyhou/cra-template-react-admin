import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders welcome to react-admin text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to React-admin/i);
  expect(linkElement).toBeInTheDocument();
});
