import BlinkLogo from "../../../images/logo.svg";

interface ILogoProps {
  className?: string;
}

const Logo = (props: ILogoProps) => {
  return <img src={BlinkLogo} alt="Blinkist" className={props.className} />;
};

export default Logo;
