import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown testing", () => {
  test("Explore dropdown", () => {
    render(<Dropdown title="Explore" />);
    const dropDownElement = screen.getByText(/Explore/i);
    expect(dropDownElement).toBeInTheDocument();
  });

  test("Account dropdown", () => {
    render(<Dropdown title="Account" />);
    const dropDownElement = screen.getByText(/Account/i);
    expect(dropDownElement).toBeInTheDocument();
  });
});
