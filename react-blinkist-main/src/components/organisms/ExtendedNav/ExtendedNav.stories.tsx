import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExtendedNav from "./ExtendedNav";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
    },
  },
});

export default {
  title: "Organisms/Extended Nav",
  component: ExtendedNav,
} as ComponentMeta<typeof ExtendedNav>;

const Template: ComponentStory<typeof ExtendedNav> = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ExtendedNav />
    </ThemeProvider>
  </BrowserRouter>
);

export const ExtendedNavStory = Template.bind({});
