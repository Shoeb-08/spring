import { render, screen } from "@testing-library/react";
import IconButtonComponent from "./IconButtonComponent";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";
import { ReactComponent as DropdownIcon } from "../../../images/downarrow.svg";

describe("Icon Button", () => {
  test("Render Search Button", () => {
    render(<IconButtonComponent children={<SearchIcon />} />);
    const iconElement = screen.getByRole("iconButton");
    expect(iconElement).toBeInTheDocument();
  });

  test("Render dropdown", () => {
    render(<IconButtonComponent children={<DropdownIcon />} />);
    const iconElement = screen.getByRole("iconButton");
    expect(iconElement).toBeInTheDocument();
  });
});
