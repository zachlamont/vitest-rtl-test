import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ChangeHeadingButton from "../src/ChangeHeadingButton";

describe("ChangeHeadingButton component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<ChangeHeadingButton />);
    expect(container).toMatchSnapshot(); //uses the toMatchSnapshot matcher from Jest.
    //This matcher takes a snapshot of the container and compares it to the previously stored snapshot (if it exists).
    //If there is no existing snapshot, it will save the current snapshot. If the snapshots match, the test passes, indicating that the component's output has not changed unexpectedly. If the snapshots differ, the test fails, indicating that the component's output has changed
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<ChangeHeadingButton />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button); //simulates user click event

    //Notice that the callback function for the second test is asynchronous.
    //This is because user.click() simulates the asynchronous nature of user interaction, which is now supported by the latest version of the testing library’s user-event APIs. As of version 14.0.0, the user-event APIs have been updated to be asynchronous. It’s worth noting that some examples from other resources or tutorials might still use the synchronous userEvent.click() method

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});

//It’s also important to note that after every test, React Testing Library unmounts the rendered components.
//That’s why we render for each test. For a lot of tests for a component, the beforeEach Jest function could prove handy.
