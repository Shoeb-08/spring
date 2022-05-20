import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import Card from "./Card";
import Entrepreneur from "../../../images/gallery1.svg";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontFamily: "Cera Pro",
          fontlWeight: "bold",
          fontSize: "18px",
          lineHeight: "23px",
          color: "#03314B",
        },
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "16px",
          lineHeight: "20px",
        },
        caption: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6D787E",
        },
      },
    },
  },
});

export default {
  title: "Organisms/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => (
  <ThemeProvider theme={theme}>
    <Card {...args} />
  </ThemeProvider>
);

export const CardStory = Template.bind({});
CardStory.args = {
  image: Entrepreneur,
  title: "Beyond Entrepreneurship",
  author: "Jim Collins & Bill Lazier",
  time: "13-minute read",
  read: "1.9k reads",
  isFinished: false,
};

export const FinishedCard = Template.bind({});
FinishedCard.args = {
  image: Entrepreneur,
  title: "Beyond Entrepreneurship",
  author: "Jim Collins & Bill Lazier",
  time: "13-minute read",
  read: "1.9k reads",
  isFinished: true,
};

export const AddToLibraryCard = Template.bind({});
AddToLibraryCard.args = {
  image: Entrepreneur,
  title: "Beyond Entrepreneurship",
  author: "Jim Collins & Bill Lazier",
  time: "13-minute read",
  read: "1.9k reads",
  isFinished: false,
  addToLibrary: true,
};
