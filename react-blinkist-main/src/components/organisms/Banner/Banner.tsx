import { Container, createTheme, ThemeProvider } from "@mui/material";
import { styled } from "@mui/styles";
import Typography from "../../atoms/Typography/Typography";
import banner from "../../../images/banner.svg";
import Constants from "../../../data/Constants";

interface BannerProps {
  className?: string;
}

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
        subtitle2: {
          fontFamily: "Cera Pro",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "23px",
          color: "#6D787E",
        },
      },
    },
  },
});

const CardStyled = styled("div")({
  width: "912px",
  height: "264px",
  backgroundColor: "#F1F6F4",
  display: "flex",
  gap: "112px",
  margin: "0 auto",
});

const WrapLeftStyled = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  position: "relative",
  top: "45px",
  left: "45px",
});

const LeftStyled = styled("div")({
  width: "319px",
  height: "90px",
});

const BottomStyled = styled("div")({
  width: "461px",
  height: "69px",
});

const RightStyled = styled("div")({});

const Banner = (props: BannerProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className={props.className} sx={{ position: "relative" }}>
          <CardStyled>
            <WrapLeftStyled>
              <LeftStyled>
                <Typography variant="h1">{Constants.banner.heading}</Typography>
              </LeftStyled>
              <BottomStyled>
                <Typography variant="subtitle2">
                  {Constants.banner.description}
                </Typography>
              </BottomStyled>
            </WrapLeftStyled>
            <RightStyled>
              <img src={banner} alt="" />
            </RightStyled>
          </CardStyled>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Banner;
