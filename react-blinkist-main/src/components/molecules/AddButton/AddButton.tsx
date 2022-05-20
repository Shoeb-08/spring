import { Button, createTheme, ThemeProvider } from "@mui/material";

interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          textTransform: "none",
        },
      },
    },
  },
});

const AddButton = (props: ButtonProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="text"
          style={props.style}
          className={props.className}
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          {props.children}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default AddButton;
