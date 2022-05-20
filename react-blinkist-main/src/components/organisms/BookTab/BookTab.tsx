import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled, makeStyles } from "@mui/styles";
import Typography from "../../atoms/Typography/Typography";
import Constants from "../../../data/Constants";

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

const useStyles = makeStyles({
  root: {
    width: "200px",
    height: "36px",
    textTransform: "none",
  },
});

const TextStyled = styled("div")({
  position: "relative",
  left: "-20px",
});

const BookTab = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const style = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                textTransform: "lowercase",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Synopsis" value="1" className={style.root} />
                <Tab label="Who is it for?" value="2" className={style.root} />
                <Tab
                  label="About the author"
                  value="3"
                  className={style.root}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <TextStyled>
                <Typography variant="body2">
                  {Constants.bookDetails.tabs.synopsis}
                </Typography>
              </TextStyled>
            </TabPanel>
            <TabPanel value="2">
              <TextStyled>
                <Typography variant="body2">
                  {Constants.bookDetails.tabs.title2}
                </Typography>
              </TextStyled>
            </TabPanel>
            <TabPanel value="3">
              <TextStyled>
                <Typography variant="body2">
                  {Constants.bookDetails.tabs.title3}
                </Typography>
              </TextStyled>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default BookTab;
