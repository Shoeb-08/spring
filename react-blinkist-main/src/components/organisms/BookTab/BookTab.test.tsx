import { render } from "@testing-library/react";
import BookTab from "./BookTab";

describe("Display Book Tab", () => {
  test("Should be displayed", () => {
    render(<BookTab />);
  });
});
