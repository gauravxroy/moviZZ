// import React from 'react'
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/trending";
import Upcoming from "../../components/upcoming/Upcoming";
import Popular from "../../components/popular/Popular";
import MediaType from "../../components/mediaType/MediaType";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <MediaType />
      <Popular />
      <Upcoming />
    </div>
  );
};

export default Home;
