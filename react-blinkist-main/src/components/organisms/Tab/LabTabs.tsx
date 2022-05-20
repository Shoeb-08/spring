import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "../Card/Card";
import { styled, makeStyles } from "@mui/styles";
import { DataObject } from "../BookView/BookView";
import api from "../../../api/library";

import BeyondEntrepreneur from "../../../images/coverImages/beyondEntrepreneurship.svg";
const tabTheme = createTheme({
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
  },
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: "304px",
    height: "39px",
    textTransform: "none",
  },
});

const CardStyled = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: "25px 19.9px",
  width: "912px",
  marginLeft: "-24px",
});

const LabTabs = () => {
  const [value, setValue] = useState<string>("1");
  const [finishCard, setFinishCard] = useState<DataObject[]>([
    {
      id: 0,
      title: "Beyond Entrepreneurship",
      author: "Jim Collins & Bill Lazier",
      time: "13",
      read: "1.9k",
      image: ""+<img src={BeyondEntrepreneur}/>,
      state: {
        isFinished: true,
        isTrending: true,
        justAdded: true,
        isFeatured: true,
      },
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/library/`);
      const mydata = response.data;
      setFinishCard(mydata);
    };
    getData();
  }, [finishCard]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const style = useStyles();

  return (
    <>
      <ThemeProvider theme={tabTheme}>
        <Box
          sx={{
            typography: "body1",
            marginTop: "60px",
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
                color="secondary"
              >
                <Tab
                  label="Currently Reading"
                  value="0"
                  className={style.root}
                />
                <Tab label="Finished" value="2" className={style.root} />
              </TabList>
            </Box>

            <TabPanel value="1">
              <CardStyled>
                {finishCard
                  .slice(0, 9)
                  .filter(item => !item.state.isFinished)
                  .map((card, index) => {
                    return (
                      <Card
                        key={index}
                        title={card.title}
                        author={card.author}
                        time={card.time}
                        read={card.read}
                        image={card.image}
                        isFinished={!card.state.isFinished}
                        value={card.id}
                      />
                    );
                  })}
              </CardStyled>
            </TabPanel>
            <TabPanel value="2">
              <CardStyled>
                {finishCard
                  .filter(item => item.state.isFinished)
                  .map((card, index) => {
                    return (
                      <Card
                        key={index}
                        title={card.title}
                        author={card.author}
                        time={card.time}
                        read={card.read}
                        image={BeyondEntrepreneur}
                        readAgain={true}
                        value={card.id}
                      />
                    );
                  })}
              </CardStyled>
            </TabPanel>
          </TabContext>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default LabTabs;
