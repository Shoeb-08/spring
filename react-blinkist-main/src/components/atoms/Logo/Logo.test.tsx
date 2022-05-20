import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

describe("Should display logo", () => {
  test("Display logo", () => {
    render(<Logo />);
    const logo = screen.getByAltText("Blinkist");
    expect(logo).toBeInTheDocument();
  });
});
