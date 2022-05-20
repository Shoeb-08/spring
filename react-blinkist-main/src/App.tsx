import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LibraryPage from "./Pages/LibraryPage/LibraryPage";
import EntrepreneurPage from "./Pages/EntrepreneurPage/EntrepreneurPage";
import BookDetailPage from "./Pages/BookDetailPage/BookDetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/library"
        element={
          localStorage.getItem("login") ? <LibraryPage /> : <LandingPage />
        }
      />
      <Route
        path="/entrepreneur"
        element={
          localStorage.getItem("login") ? <EntrepreneurPage /> : <LandingPage />
        }
      />
      <Route
        path="/bookdetails"
        element={
          localStorage.getItem("login") ? <BookDetailPage /> : <LandingPage />
        }
      />
    </Routes>
  );
};

export default App;
