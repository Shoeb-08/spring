import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButton from "./IconButtonComponent";

import { ReactComponent as SearchIcon } from "../../../images/search.svg";
import { ReactComponent as DropdownIcon } from "../../../images/downarrow.svg";

export default {
  title: "Atoms/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => (
  <IconButton {...args} />
);

export const SearchIconStory = Template.bind({});
SearchIconStory.args = {
  children: <SearchIcon />,
};

export const DropdownIconStory = Template.bind({});
DropdownIconStory.args = {
  children: <DropdownIcon />,
};
