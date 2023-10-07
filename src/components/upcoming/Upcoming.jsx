// import React from "react";
// import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../hooks/useFetch";
import Carousel from "../../components/carousel/Carousel";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
const Upcoming = () => {
  const { data, loading } = useFetch(`/movie/upcoming`);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <div className="carouselTittle">Upcoming Movies</div>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Upcoming;
