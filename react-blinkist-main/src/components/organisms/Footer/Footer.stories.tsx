import { ComponentMeta, ComponentStory } from "@storybook/react";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Footer";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontFamily: "Cera Pro",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "32px",
          color: "#0365F2",
        },
        caption: {
          fontFamily: "Cera Pro",
          fontSize: "14px",
          lineHeight: "22px",
          color: "#6D787E",
        },
      },
    },
  },
});

export default {
  title: "Organisms/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => (
  <ThemeProvider theme={theme}>
    <Footer />
  </ThemeProvider>
);

export const FooterStory = Template.bind({});
