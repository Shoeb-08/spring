import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material";
import classNames from "classnames";
import { useState, useEffect } from "react";
import Typography from "../../atoms/Typography/Typography";
import { ReactComponent as Time } from "../../../images/time.svg";
import { ReactComponent as User } from "../../../images/user.svg";
import IconWithTypography from "../../molecules/IconWithTypography/IconWithTypography";
import AddButton from "../../molecules/AddButton/AddButton";
import { ReactComponent as Add } from "../../../images/add.svg";
import api from "../../../api/library";
import { DataObject } from "../BookView/BookView";

interface CardProps {
  className?: string;
  image?: string;
  title: string;
  author: string;
  time: string;
  read: string;
  isFinished?: boolean;
  addToLibrary?: boolean;
  readAgain?: boolean;
  onClick?: () => void;
  value: number;
}

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontFamily: "Cera Pro",
          fontlWeight: "bold",
          fontSize: "18px",
          lineHeight: "23px",
          color: "#03314B",
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
          color: "#6D787E",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    width: "284px",
    height: "466px",
    background: "#FFFFFF",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    overflow: "hidden",
  },
  image: {
    position: "relative",
    height: "292px",
    width: "284px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  },
  heading: {
    position: "relative",
    top: "23px",
    left: "16px",
    bottom: "80px",
    height: "23px",
    fontFamily: "Cera Pro",
    fontSize: "18px",
    lineHeight: "23px",
    color: "#03314B",
  },
  author: {
    position: "relative",
    top: "16px",
    left: "16px",
    height: "20px",
    fontFamily: "Cera Pro",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#6D787E",
  },
  divItems: {
    display: "flex",
    flexDirection: "row",
    top: "17px",
  },
  time: {
    position: "relative",
    left: "5px",
    top: "16px",
    fontFamily: "Cera Pro",
    fontSize: "14px",
    lineHeight: "18px",
    color: "#6D787E",
  },
  read: {
    position: "relative",
    top: "16px",
    left: "47.33px",
    fontFamily: "Cera Pro",
    fontSize: "14px",
    lineHeight: "18px",
    textAlign: "right",
    color: "#6D787E",
  },
  more: {
    marginLeft: "auto",
    marginRight: "16px",
  },
  footer: {
    height: "15px",
    display: "inline-flex",
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
  left: {
    width: "88px",
    background: "#E1ECFC",
    borderRadius: "0px 0px 0px 8px",
  },
  finished: {
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#0365F2",
    textAlign: "center",
    position: "relative",
    top: "15px",
    cursor: "pointer",
  },
  addButton: {
    width: "100%",
    height: "52px",
    margin: "0 auto",
  },
});

const Card = (props: CardProps) => {
  const [mouseState, setMouseState] = useState(false);

  const [bookData, setBookData] = useState<DataObject>({
    id: 1,
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

  const updateFinish = async (num: number) => {
    if (bookData.state.isFinished) {
      bookData.state.isFinished = false;
    } else {
      bookData.state.isFinished = true;
    }
    await api.put(`/library/${num}`, bookData);
  };

  useEffect(() => {
    const getData = async (val: number) => {
      const response = await api.get(`/library/${val}`);
      const mydata = response.data;
      setBookData(mydata);
    };
    getData(props.value);
  }, [props.value]);

  const handleMouseEnter = () => {
    setMouseState(true);
  };

  const handleMouseLeave = () => {
    setMouseState(false);
  };

  let linkStyle;
  let iconStyle;

  if (mouseState) {
    linkStyle = {
      backgroundColor: "#0365F2",
      color: "white",
    };
    iconStyle = {
      fill: "white",
      stroke: "white",
    };
  } else {
    linkStyle = {
      backgroundColor: "#FFFFFF",
    };
    iconStyle = {};
  }

  const style = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          className={classNames(props.className, style.root)}
          onClick={props.onClick}
        >
          <img src={props.image} alt="img" className={style.image} />
          <Typography variant="subtitle1" className={style.heading}>
            {props.title}
          </Typography>
          <Typography variant="body1" className={style.author}>
            {props.author}
          </Typography>
          <div className={style.divItems}>
            <div className={style.time}>
              <IconWithTypography
                iconSrc={<Time />}
                variant="caption"
                title={props.time}
              />
            </div>
            <div className={style.read}>
              {props.read === "" ? null : (
                <IconWithTypography
                  iconSrc={<User />}
                  variant="caption"
                  title={props.read}
                />
              )}
            </div>
          </div>

          {props.isFinished ? (
            <Typography
              variant="body1"
              className={style.finished}
              onClick={() => updateFinish(props.value)}
            >
              Finished
            </Typography>
          ) : null}

          {props.readAgain ? (
            <Typography
              variant="body1"
              className={style.finished}
              onClick={() => updateFinish(props.value)}
            >
              Read Again
            </Typography>
          ) : null}

          {props.addToLibrary ? (
            <AddButton
              style={linkStyle}
              className={style.addButton}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <IconWithTypography
                iconSrc={<Add style={iconStyle} />}
                variant="body1"
                title="Add to library"
              />
            </AddButton>
          ) : null}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Card;
