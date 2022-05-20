import { makeStyles } from "@mui/styles";

interface LandingTemplateProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
});

const LandingTemplate = (props: LandingTemplateProps) => {
  const style = useStyles();
  return (
    <>
      {props.header}
      <div className={style.root}>{props.content}</div>
      {props.footer}
    </>
  );
};

export default LandingTemplate;
