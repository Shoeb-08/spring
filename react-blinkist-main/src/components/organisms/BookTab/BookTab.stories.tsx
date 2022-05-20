import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import BookTab from "./BookTab";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          placeItems: "flex-start",
          fontFamily: "Cera Pro",
          fontSize: "18px",
          lineHeight: "23px",
          color: "#03314B",
          main: "#22c870",
        },
        textColorPrimary: {
          color: "#03314B",
        },
      },
    },
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
      },
    },
  },
  palette: {
    primary: {
      main: "#22C870",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    fontSize: 18,
    body1: {
      fontWeight: "bold",
      color: "#03314B",
    },
  },
});

export default {
  title: "Organisms/Book Tab",
  component: BookTab,
} as ComponentMeta<typeof BookTab>;

const Template: ComponentStory<typeof BookTab> = () => (
  <ThemeProvider theme={theme}>
    <BookTab />
  </ThemeProvider>
);

export const BookTabStory = Template.bind({});
BookTabStory.args = {};
