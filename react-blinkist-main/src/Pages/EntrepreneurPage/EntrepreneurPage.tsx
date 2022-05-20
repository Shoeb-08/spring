import Entreprenuer from "../../components/templates/Entreprenuer/Entreprenuer";
import Header from "../../components/organisms/Header/Header";
import Banner from "../../components/organisms/Banner/Banner";
import SearchBar from "../../components/molecules/SearchBar/SearchBar";
import DisplayCard from "../../components/organisms/DisplayCard/DisplayCard";
import Footer from "../../components/organisms/Footer/Footer";
import BookData from "../../data/Library";
import Constants from "../../data/Constants";

const EntrepreneurPage = () => {
  return (
    <Entreprenuer
      header={<Header />}
      banner={<Banner />}
      search={<SearchBar />}
      firstSection={
        <DisplayCard
          title={Constants.entrepreneur.heading1}
          data={BookData}
          state="trending"
        />
      }
      secondSection={
        <DisplayCard
          title={Constants.entrepreneur.heading2}
          data={BookData}
          state="just added"
        />
      }
      thirdSection={
        <DisplayCard
          title={Constants.entrepreneur.heading3}
          data={BookData}
          state="featured"
        />
      }
      footer={<Footer />}
    />
  );
};

export default EntrepreneurPage;
