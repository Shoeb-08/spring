import { render } from "@testing-library/react";
import Banner from "./Banner";

describe("Display banner", () => {
  test("Should be display", () => {
    render(<Banner />);
  });
});
