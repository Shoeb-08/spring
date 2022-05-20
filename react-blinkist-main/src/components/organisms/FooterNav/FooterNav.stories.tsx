import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterNav from "./FooterNav";
import data from "../../../data/FooterNav";

export default {
  title: "Organisms/FooterNav",
  component: FooterNav,
} as ComponentMeta<typeof FooterNav>;

const Template: ComponentStory<typeof FooterNav> = args => (
  <FooterNav {...args} />
);

export const FirstNav = Template.bind({});

FirstNav.args = {
  title: "Editorial",
  data: data.Editorial,
};

export const SecondNav = Template.bind({});

SecondNav.args = {
  title: "Useful Links",
  data: data.UsefulLinks,
};

export const ThirdNav = Template.bind({});

ThirdNav.args = {
  title: "Company",
  data: data.Company,
};
