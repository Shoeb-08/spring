import Typography from "@mui/material/Typography";

export interface ItypographyProps {
  children: string;
  variant:
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
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  className?: string;
  onClick?: () => void;
}

const TypographyComponent = (props: ItypographyProps) => {
  return (
    <>
      <Typography
        variant={props.variant}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </Typography>
    </>
  );
};

export default TypographyComponent;
