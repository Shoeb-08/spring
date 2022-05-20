import { render, screen } from "@testing-library/react";
import AddButton from "./AddButton";
import IconWithTypography from "../IconWithTypography/IconWithTypography";
import { ReactComponent as Add } from "../../../images/add.svg";

describe("Add Button test", () => {
  test("Should display typgraphy", () => {
    render(<AddButton children="connect" />);
    const connectButton = screen.getByRole("button");
    expect(connectButton).toBeInTheDocument();
  });

  test("Should display icon with typography", () => {
    render(
      <AddButton
        children={
          <IconWithTypography
            iconSrc={<Add />}
            title="Add to Library"
            variant="body1"
          />
        }
      />
    );
    const iconButton = screen.getByRole("button");
    expect(iconButton).toBeInTheDocument();
  });
});
