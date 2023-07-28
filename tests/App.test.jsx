//npm run test to run tests

import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

//You can render React components in Vitest

import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("renders 'Vite + Reacty' as the headline", () => {
    render(<App title="Reacty" />);

    // Look for the specific text 'Vite + Reacty' in the rendered output
    const headlineElement = screen.getByText("Vite + Reacty");
    expect(headlineElement).toBeInTheDocument();
  });
});
