import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import BookView from "./BookView";

export default {
  title: "Organisms/Book View",
  component: BookView,
} as ComponentMeta<typeof BookView>;

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
        },
        h1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "36px",
          lineHeight: "45px",
          color: "#03314B",
        },
        subtitle1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "25px",
          color: "#03314B",
        },
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#6D787E",
        },
        caption: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "18px",
          color: "#6D787E",
        },
      },
    },
  },
});

const Template: ComponentStory<typeof BookView> = () => (
  <ThemeProvider theme={theme}>
    <BookView />
  </ThemeProvider>
);

export const BookViewStory = Template.bind({});
BookViewStory.args = {};
