import { screen, render } from "../../test-utils";
import AppProviders from "../../providers/AppProviders";
import { MuiMode } from "./muiMode";

describe("Mui mode", () => {
  test("render text correctly", () => {
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
