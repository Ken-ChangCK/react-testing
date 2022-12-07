import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("Green render correctly", () => {
    render(<Greet />);
    const text = screen.getByText("Hello");
    expect(text).toBeInTheDocument();
  });

  test("Greet renders width a name", () => {
    render(<Greet name="ABC" />);
    const text = screen.getByText("Hello ABC");
    expect(text).toBeInTheDocument();
  });
});
