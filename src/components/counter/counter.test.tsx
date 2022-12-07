import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const increatmentButton = screen.getByRole("button", {
      name: "+",
    });
    expect(increatmentButton).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the button", async () => {
    user.setup();
    render(<Counter />);
    const increatmentButton = screen.getByRole("button", {
      name: "+",
    });
    await user.click(increatmentButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the button twice time", async () => {
    user.setup();
    render(<Counter />);
    const increatmentButton = screen.getByRole("button", {
      name: "+",
    });
    await user.click(increatmentButton);
    await user.click(increatmentButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    // 這是input type number的role
    const amountInput = screen.getByRole("spinbutton");

    await user.type(amountInput, "10");

    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "set",
    });

    await user.click(setButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("element have focus on right order", async () => {
    user.setup();
    render(<Counter />);

    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
