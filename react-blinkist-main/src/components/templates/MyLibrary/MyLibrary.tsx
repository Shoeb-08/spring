import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";

interface MyLibraryProps {
  header: React.ReactNode;
  heading: React.ReactNode;
  tab: React.ReactNode;
  footer: React.ReactNode;
}

const upperTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#03314B",
          fontFamily: "Cera Pro",
          fontSize: "36px",
          lineHeight: "45px",
          fontStyle: "normal",
          fontWeight: "700",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
  },
  heading: {
    marginTop: "59px",
  },
});

const MyLibrary = (props: MyLibraryProps) => {
  const style = useStyles();
  return (
    <ThemeProvider theme={upperTheme}>
      <div className={style.root}>
        {props.header}
        <Container>
          <Box sx={{ width: "912px", margin: "59px auto " }}>
            <div className={style.heading}>{props.heading}</div>
            {props.tab}
          </Box>
        </Container>
        {props.footer}
      </div>
    </ThemeProvider>
  );
};

export default MyLibrary;
