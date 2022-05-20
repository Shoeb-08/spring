import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

export default {
  title: "Atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args} />
);

export const Heading = Template.bind({});
Heading.args = {
  children: "This is heading 1",
  variant: "h3",
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  children: "This is subtitle 1",
  variant: "subtitle1",
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  children: "This is subtitle 2",
  variant: "subtitle2",
};

export const Caption = Template.bind({});
Caption.args = {
  children: "This is Caption",
  variant: "caption",
};
