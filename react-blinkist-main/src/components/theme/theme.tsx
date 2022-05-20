import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          placeItems: "flex-start",
          fontFamily: "Cera Pro",
          fontSize: "18px",
          lineHeight: "23px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: "Cera Pro",
          fontWeight: "bold",
          fontSize: "36px",
          lineHeight: "45px",
        },
        subtitle2: {
          fontFamily: "Cera Pro",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "23px",
        },
        subtitle1: {
          fontFamily: "Cera Pro",
          fontlWeight: "bold",
          fontSize: "18px",
          lineHeight: "23px",
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
        },
        body2: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "20px",
        },
        h3: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "30px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

export default theme;
