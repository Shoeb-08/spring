import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "./Banner";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "Cera Pro",
          fontWeight: "bold",
          fontSize: "36px",
          lineHeight: "45px",
          color: "#03314B",
        },
      },
    },
  },
});

export default {
  title: "Organisms/Banner Card",
  component: Banner,
  decorators: [story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>],
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const CardBanner = Template.bind({});
CardBanner.args = {};
