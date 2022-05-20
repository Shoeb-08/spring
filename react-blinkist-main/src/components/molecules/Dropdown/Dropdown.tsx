import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Typography from "../../atoms/Typography/Typography";
import Icon from "../../atoms/Icons/IconButtonComponent";
import classNames from "classnames";
import { ReactComponent as ExpandIcon } from "../../../images/downarrow.svg";
import { ReactComponent as Account } from "../../../images/account.svg";

export interface IdropDownProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    gap: "1px 1px",
    height: "24px",
    cursor: "pointer",
  },
  typography: {
    alignSelf: "center",
    fontFamily: "Cera Pro",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    color: "#03314B",
  },
});

const Dropdown = (props: IdropDownProps) => {
  const style = useStyles();
  return (
    <>
      <Box className={classNames(style.root, props.className)}>
        {props.title === "Account" ? (
          <Icon type="account">
            <Account width="40px" height="40px" />
          </Icon>
        ) : (
          <Typography variant="body1" className={style.typography}>
            {props.title}
          </Typography>
        )}
        <Icon onClick={props.onClick} style={props.style}>
          <ExpandIcon />
        </Icon>
      </Box>
    </>
  );
};

export default Dropdown;
