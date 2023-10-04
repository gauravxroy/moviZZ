import { useState } from "react";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import SwitchTab from "../switchTab/SwitchTab";
import useFetch from "../../hooks/useFetch";
import Carousel from "../carousel/Carousel";

const Trending = () => {
  const [mediaType, setMediaType] = useState("movie");
  const { data, loading } = useFetch(`/${mediaType}/popular`);

  const onTabChange = (tab) => {
    setMediaType(tab === "Movie" ? "movie" : "tv");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTittle">Popular</div>
        <SwitchTab data={["Movie", "Tv"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
