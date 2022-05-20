import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

interface AuthProps {
  children: React.ReactNode;
}

const Auth0ProviderComponent = (props: AuthProps) => {
  const navigate = useNavigate();
  const domain= process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId= process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallBack = () => {
    navigate("/library");
  };

  return (
    <Auth0Provider
      domain={domain!}
      clientId={clientId!}
      redirectUri={window.location.origin + "/library"}
      onRedirectCallBack={onRedirectCallBack}
    >
      
      {props.children}
    </Auth0Provider>
  );
};

export default Auth0ProviderComponent;
