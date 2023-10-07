// import React from 'react'
import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import TrendingSection from "./trendingSection/TrendingSection";
import Upcoming from "../../components/upcoming/Upcoming";
import Popular from "../../components/popular/Popular";
import MediaType from "../../components/mediaType/MediaType";
const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <TrendingSection />
      <MediaType />
      <Popular />
      <Upcoming />
    </div>
  );
};

export default Home;
