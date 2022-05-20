import styled from "@mui/styles/styled/styled";
import { createTheme, ThemeProvider } from "@mui/material";
import Typography from "../../atoms/Typography/Typography";

interface FooterNavProps {
  title: string;
  data: Array<string>;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontWeight: "bold",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#03314B",
        },
        body2: {
          fontFamily: "Cera Pro",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#6D787E",
        },
      },
    },
  },
});

const NavListStyled = styled("div")({
  width: "214px",
  height: "224px",
});

const NavListItems = styled("div")({
  margin: " 16px 0px",
});

const FooterNav = (props: FooterNavProps) => {
  return (
    <ThemeProvider theme={theme}>
      <NavListStyled>
        <Typography variant="body1">{props.title}</Typography>
        {props.data.map((item, index) => {
          return (
            <NavListItems key={index}>
              <Typography variant="body2">{item}</Typography>
            </NavListItems>
          );
        })}
      </NavListStyled>
    </ThemeProvider>
  );
};

export default FooterNav;
