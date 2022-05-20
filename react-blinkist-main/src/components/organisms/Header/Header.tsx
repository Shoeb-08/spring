import {
  Box,
  Container,
  Paper,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../molecules/Dropdown/Dropdown";
import Typography from "../../atoms/Typography/Typography";
import Icon from "../../atoms/Icons/IconButtonComponent";
import Logo from "../../atoms/Logo/Logo";
import SearchIcon from "../../../images/search.svg";
import ExtendedNav from "../../organisms/ExtendedNav/ExtendedNav";
import Constants from "../../../data/Constants";
import AddButton from "../../molecules/AddButton/AddButton";
import { useAuth0 } from "@auth0/auth0-react";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontFamily: "Cera Pro",
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "20px",
          color: "#03314B",
        },
      },
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    gap: "40px",
    height: "86px",
    margin: "0 auto",
    width: "912px",
  },
  logo: {
    width: "124.09px",
    height: "26px",
    alignSelf: "center",
  },
  library: {
    alignSelf: "center",
    color: "#03314B",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  explore: {
    alignSelf: "center",
    "&:hover": {
      borderBottom: "1px solid #22C870",
    },
  },
  account: {
    marginLeft: "auto",
    alignSelf: "center",
  },
  logout: {
    position: "absolute",
    right: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    zIndex: "3",
  },
}));

const Header = () => {
  const [showExplore, setShowExplore] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [exploreIconStyle, setExploreIconStyle] = useState({
    transform: "rotate(0deg)",
  });
  const [accountIconStyle, setAccountIconStyle] = useState({
    transform: "rotate(0deg)",
  });

  const navigate = useNavigate();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const showExploreDropdown = () => {
    showExplore ? setShowExplore(false) : setShowExplore(true);

    if (showExplore) {
      setExploreIconStyle({ transform: "rotate(0deg)" });
    } else {
      setExploreIconStyle({ transform: "rotate(180deg)" });
    }
  };

  const showAccountDropdown = () => {
    showLogout ? setShowLogout(false) : setShowLogout(true);

    if (showLogout) {
      setAccountIconStyle({ transform: "rotate(0deg)" });
    } else {
      setAccountIconStyle({ transform: "rorate(180deg)" });
    }
  };

  const style = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Box className={style.root}>
            <Logo className={style.logo} />
            {isAuthenticated ? (
              <>
                <Icon>
                  <img src={SearchIcon} alt="icon" />
                </Icon>
                <Dropdown
                  title={Constants.header.link1}
                  className={style.explore}
                  onClick={showExploreDropdown}
                  style={exploreIconStyle}
                />
                <Typography
                  variant="body1"
                  className={style.library}
                  onClick={() =>
                    isAuthenticated ? navigate("/library") : navigate("/")
                  }
                >
                  {Constants.header.link2}
                </Typography>

                <Dropdown
                  title="Account"
                  className={style.account}
                  onClick={showAccountDropdown}
                  style={accountIconStyle}
                />
              </>
            ) : (
              <AddButton
                onClick={() => {
                  localStorage.setItem("login", "true");
                  loginWithRedirect();
                }}
                className={style.account}
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#22C870",
                  color: "black",
                }}
              >
                <Typography variant="body1">Login</Typography>
              </AddButton>
            )}
          </Box>
        </Container>
        {showExplore ? <ExtendedNav /> : null}
        {isAuthenticated && showLogout ? (
          <Paper className={style.logout} style={{ width: "110px" }}>
            <AddButton>
              <Typography variant="body1">My Profile</Typography>
            </AddButton>
            <AddButton>
              <Typography variant="body1">Settings</Typography>
            </AddButton>

            <AddButton
              onClick={() => {
                logout();
                localStorage.removeItem("login");
              }}
              style={{ color: "red" }}
            >
              <Typography variant="body1">Logout</Typography>
            </AddButton>
          </Paper>
        ) : null}
      </ThemeProvider>
    </>
  );
};

export default Header;
