import { createTheme, ThemeProvider } from "@mui/material";

interface BookViewProps {
  header: React.ReactNode;
  bookView: React.ReactNode;
  footer: React.ReactNode;
}

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

const BookDetail = (props: BookViewProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {props.header}
        {props.bookView}
        {props.footer}
      </ThemeProvider>
    </>
  );
};

export default BookDetail;
