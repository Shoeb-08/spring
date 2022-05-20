import { createTheme, ThemeProvider, Box, Container } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Typography from "../../atoms/Typography/Typography";
import NavData from "../../../data/ExtendedNavData";
import IconWithTypography from "../../molecules/IconWithTypography/IconWithTypography";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  div1: {
    boxSizing: "border-box",
    minWidth: "100%",
    height: "398px",
    backgroundColor: "#F1F6F4",
    margin: "0 auto",
    position: "absolute",
    zIndex: "2",
    overflowX: "hidden",
    left: "0px",
  },
  box1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: "150px",
    position: "relative",
    top: "30px",
    paddingBottom: "24px",
    borderBottom: "1px solid black",
    width: "900px",
    margin: "0 auto",
  },
  tab1: {
    color: "#116BE9",
  },
  navItems: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "900px",
    top: "40px",
    position: "relative",
    gap: " 16px 140px",
    justifyContent: "flex-start",
    alignContent: "flexStart",
    margin: "0 auto",
  },
  items: {
    width: "182px",
  },
  hover: {
    cursor: "pointer",
    "&:hover": {
      color: "#116BE9",
    },
  },
});

const WrapStyled = styled("div")({
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: "rgba(157, 163, 166, 0.45)",
  position: "absolute",
  zIndex: "1",
  margin: "0 auto",
  left: "0px",
});

const ExtendedNav = () => {
  const [wrapStyle, setWrapStyle] = useState({
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  });

  useEffect(() => {
    setWrapStyle({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
  }, [wrapStyle]);

  const style = useStyles();

  const navigate = useNavigate();

  const { isAuthenticated } = useAuth0();

  const showEnterprenuerList = () => {
    isAuthenticated ? navigate("/entrepreneur") : navigate("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <WrapStyled style={wrapStyle}>
        <div className={style.div1}>
          <Container>
            <Box className={style.box1}>
              <Typography variant="body1" className={style.tab1}>
                Explore by category
              </Typography>
              <Typography variant="body1">See recently added titles</Typography>
              <Typography variant="body1">See popular titles</Typography>
            </Box>
            <Box className={style.navItems}>
              {console.log(NavData[0].icon)}
              {NavData.map((data, index) => {
                return (
                  <div className={style.items}>
                    <IconWithTypography
                      key={index}
                      iconSrc={data.icon}
                      title={data.title}
                      variant="body2"
                      className={style.hover}
                      onClick={showEnterprenuerList}
                    />
                  </div>
                );
              })}
            </Box>
          </Container>
        </div>
      </WrapStyled>
    </ThemeProvider>
  );
};

export default ExtendedNav;
