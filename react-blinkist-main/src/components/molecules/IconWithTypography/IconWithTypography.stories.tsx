import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconWithTypography from "./IconWithTypography";
import { ReactComponent as User } from "../../../images/user.svg";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as Entreprenuer } from "../../../images/entreprenuer.svg";

export default {
  title: "Molecules/IconWithTypograph",
  component: IconWithTypography,
} as ComponentMeta<typeof IconWithTypography>;

const Template: ComponentStory<typeof IconWithTypography> = args => (
  <IconWithTypography {...args} />
);

export const TimeIcon = Template.bind({});
TimeIcon.args = {
  iconSrc: <Time />,
  variant: "caption",
  title: "13-min read",
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  iconSrc: <User />,
  variant: "caption",
  title: "1.9k reads",
};

export const EntrepreneurIcon = Template.bind({});
EntrepreneurIcon.args = {
  iconSrc: <Entreprenuer />,
  variant: "body1",
  title: "Entreprenuership",
};
