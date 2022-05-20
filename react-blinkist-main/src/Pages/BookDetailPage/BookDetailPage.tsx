import BookDetail from "../../components/templates/BookDetail/BookDetail";
import Header from "../../components/organisms/Header/Header";
import BookView from "../../components/organisms/BookView/BookView";
import Footer from "../../components/organisms/Footer/Footer";

const BookDetailPage = () => {
  return (
    <BookDetail
      header={<Header />}
      bookView={<BookView />}
      footer={<Footer />}
    />
  );
};

export default BookDetailPage;
