import React from "react";
import { render, screen } from "@testing-library/react";

import TestComponent from "../src/TestComponent";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<TestComponent />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
