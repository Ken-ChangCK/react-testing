import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greet/greet";

describe("Greet", () => {
  // fit("Green render correctly", () => {
  //   render(<Greet />);
  //   const text = screen.getByText("Hello");
  //   expect(text).toBeInTheDocument();
  // });

  it("Greet renders width a name", () => {
    render(<Greet name="ABC" />);
    const text = screen.getByText("Hello ABC");
    expect(text).toBeInTheDocument();
  });
});
