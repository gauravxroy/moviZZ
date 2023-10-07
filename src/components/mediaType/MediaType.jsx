// import React from "react";
import SwitchTab from "../switchTab/SwitchTab";
import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { useState } from "react";
const Upcoming = () => {
  const [mediaType, setMediaType] = useState("movie");
  const { data, loading } = useFetch(`/discover/${mediaType}`);
  const onTabChange = (tab) => {
    setMediaType(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTittle">Categories</div>
        <SwitchTab data={["Movies", "Tvs"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Upcoming;
