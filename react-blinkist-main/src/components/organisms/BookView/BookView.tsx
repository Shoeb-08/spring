import { styled, ThemeProvider } from "@mui/styles";
import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atoms/Typography/Typography";
import IconWithTypography from "../../molecules/IconWithTypography/IconWithTypography";
import { ReactComponent as Time } from "../../../images/time.svg";
import BeyondEntrepreneur from "../../../images/coverImages/beyondEntrepreneurship.svg";
import AddButton from "../../molecules/AddButton/AddButton";
import { ReactComponent as Side } from "../../../images/side.svg";
import BookTab from "../../organisms/BookTab/BookTab";
import api from "../../../api/library";
import Constants from "../../../data/Constants";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { TabPanel } from "@mui/lab";

export type DataObject = {
  id: number;
  title: string;
  author: string;
  image: string;
  time: string;
  read: string;
  state: {
    isFinished: boolean;
    isTrending: boolean;
    justAdded: boolean;
    isFeatured: boolean;
  };
};

const LeftSection = styled("div")({
  height: "100px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const LeftBottom = styled("div")({
  display: "flex",
  flexDirection: "row",
  marginTop: "45px",
  gap: "30px",
});

const WrapStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const BottomTab = styled("div")({
  marginTop: "60px",
});

const RightSection = styled("div")({
  height: "100px",
  marginTop: "50px",
});

const BookView = () => {

  const [value, setValue] = useState<string>("1");
  const [bookData, setBookData] = useState<DataObject>({
    id: 0,
    title: "",
    author: "",
    image: "",
    time: "",
    read: "",
    state: {
      isFinished: false,
      isTrending: false,
      isFeatured: false,
      justAdded: false,
    },
  });

  const [buttonHover, setButtonHover] = useState(false);

  const handleMouseEnter = () => {
    setButtonHover(true);
  };

  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  const handleFinish = async (num: number) => {
    bookData.state.isFinished = true;
    await api.put(`/library/${num}`, bookData);
  };

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const showBookDetails = (index: number) => {
    if (index === 1) {
      isAuthenticated ? navigate("/library") : navigate("/");
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/library/`);
      const mydata = response.data;
      setBookData(mydata[9]);
    };
    getData();
    console.log(bookData);
  }, [bookData]);

  let hoverStyle;
  if (buttonHover) {
    hoverStyle = { backgroundColor: "#00C263" };
  }
  

  return (
    <>
      <Container sx={{ marginTop: "30px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "912px",
            height: "660px",
            margin: "0 auto",
            borderBottom: "1px solid #E1ECFC",
          }}
        >
          <LeftSection>
            <Typography variant="body2">
              {Constants.bookDetails.title}
            </Typography>
            <Typography variant="h1">
              {Constants.bookDetails.heading}
            </Typography>
            <Typography variant="subtitle1">
              {Constants.bookDetails.description}
            </Typography>
            <Typography variant="body1">
              {Constants.bookDetails.author}
            </Typography>
            <IconWithTypography
              iconSrc={<Time />}
              variant="caption"
              title="15-minute read"
            />
            <WrapStyled>
              <LeftBottom>
                <AddButton
                  style={{
                    width: "122px",
                    height: "44px",
                    color: "#22C870",
                    border: "1px solid black",
                  }}
                >
                  <Typography variant="body1">
                    {Constants.bookDetails.buttons.read}
                  </Typography>
                </AddButton>
                <AddButton
                  style={{
                    width: "170px",
                    height: "44px",
                    backgroundColor: "#2CE080",
                    color: "black",
                    ...hoverStyle,
                  }}
                  onClick={() => showBookDetails(1)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Typography variant="body1">
                    {Constants.bookDetails.buttons.finish}
                  </Typography>
                </AddButton>
                <AddButton
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "11px",
                    color: "#6D787E",
                  }}
                >
                  <Typography variant="body1">
                    {Constants.bookDetails.buttons.send}
                  </Typography>
                  <Side />
                </AddButton>
              </LeftBottom>
              <BottomTab>
                <BookTab />
              </BottomTab>
            </WrapStyled>
          </LeftSection>
          <RightSection>
            <img src={BeyondEntrepreneur} alt="" />
          </RightSection>
        </Box>
      </Container>
    </>
  );
};

export default BookView;
