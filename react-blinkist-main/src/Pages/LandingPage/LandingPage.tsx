import LandingTemplate from "../../components/templates/LandingTemplate/LandingTemplate";
import Header from "../../components/organisms/Header/Header";
import { ReactComponent as Cover } from "../../images/cover.svg";
import Footer from "../../components/organisms/Footer/Footer";

const LandingPage = () => {
  return (
    <LandingTemplate
      header={<Header />}
      content={<Cover />}
      footer={<Footer />}
    />
  );
};

export default LandingPage;
