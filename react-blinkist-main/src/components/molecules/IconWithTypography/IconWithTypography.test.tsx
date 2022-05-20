import { render, screen } from "@testing-library/react";
import IconWithTypography from "./IconWithTypography";
import { ReactComponent as Add } from "../../../images/add.svg";

describe("Icon with Typography tests", () => {
  test("Add icon with Typography", () => {
    render(
      <IconWithTypography
        iconSrc={<Add />}
        title="Add to library"
        variant="body1"
      />
    );
    const element = screen.getByText(/Add to library/i);
    expect(element).toBeInTheDocument();
  });
});
