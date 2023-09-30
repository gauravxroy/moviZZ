/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./App.css";
import {} from "./Stores/Store";
import { fetchDataFromTMDb } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "./Stores/homeSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Details from "./pages/details/Details";
import PageNotFound from "./pages/404/PageNotFound";
import SearchResult from "./pages/searchResult/SearchResult";
import About from "./pages/about/About";

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  // console.log(url);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    fetchDataFromTMDb("/configuration")
      .then((res) => {
        // console.log(res);
        const url = {
          backdrop: res.images.secure_base_url + "original",
          poster: res.images.secure_base_url + "original",
          profile: res.images.secure_base_url + "w185",
        };
        dispatch(getApiConfiguration(url));
      })

      .catch((error) => {
        console.error("API Error:", error); // Log any errors
      });
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
