import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Molecules/Drop down",
  component: Dropdown,
  argTypes: { onClick: { action: "clicked" } },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
  <Dropdown {...args} />
);

export const ExploreDropdown = Template.bind({});
ExploreDropdown.args = {
  title: "Explore",
};

export const AccountDropdown = Template.bind({});
AccountDropdown.args = {
  title: "Account",
};
