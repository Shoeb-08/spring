import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tab from "./LabTabs";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          placeItems: "flex-start",
          fontFamily: "Cera Pro",
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "23px",
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
    subtitle1: {
      fontWeight: "bold",
    },
  },
});

export default {
  title: "Organisms/Tabs",
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = () => (
  <ThemeProvider theme={theme}>
    <Tab />
  </ThemeProvider>
);

export const MyLibraryTab = Template.bind({});
MyLibraryTab.args = {};
