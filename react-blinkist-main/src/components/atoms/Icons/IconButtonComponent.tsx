import IconButton from "@mui/material/IconButton";
import React from "react";

interface IIconProps {
  children: React.ReactNode;
  type?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const IconButtonComponent = (props: IIconProps) => {
  return (
    <IconButton
      role="iconButton"
      onClick={props.onClick}
      edge={props.type === "account" ? "end" : false}
      className={props.className}
      style={props.style}
    >
      {props.children}
    </IconButton>
  );
};

export default IconButtonComponent;
