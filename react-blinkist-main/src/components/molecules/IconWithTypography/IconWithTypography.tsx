import { makeStyles } from "@mui/styles";
import Icon from "../../atoms/Icons/IconButtonComponent";
import Typography from "../../atoms/Typography/Typography";
import classNames from "classnames";

export interface IconWithTypographyProps {
  iconSrc: React.ReactNode;
  variant:
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "overline"
    | "inherit";
  title: string;
  className?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
  },
  typography: {
    alignSelf: "center",
  },
});

const IconWithTypography = (props: IconWithTypographyProps) => {
  const style = useStyles();
  return (
    <>
      <div className={style.root}>
        <Icon>{props.iconSrc}</Icon>
        <Typography
          variant={props.variant}
          className={classNames(style.typography, props.className)}
          onClick={props.onClick}
        >
          {props.title}
        </Typography>
      </div>
    </>
  );
};

export default IconWithTypography;
