import { render, screen } from "@testing-library/react";
import BookView from "./BookView";

describe("Book View test", () => {
  test("Button style", () => {
    render(<BookView />);
    const buttonElement = screen.getByText(/Finished/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
