import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "Molecules/SearchBars",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const Search = Template.bind({});
