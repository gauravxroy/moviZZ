/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromTMDb } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/moviecard/MovieCard";
import { FaArrowAltCircleUp } from "react-icons/fa";

import "./style.scss";
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromTMDb(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    setLoading(true);
    fetchDataFromTMDb(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData(res);
          setPageNum({ ...data, results: [...data.results, ...res.results] });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };
  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);
  return (
    <>
      <div className="searchResultsPage">
        {loading && <Spinner initial={true} />}
        {!loading && (
          <ContentWrapper>
            {data?.results?.length > 0 ? (
              <>
                <div className="pageTitle">{`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}</div>
                <InfiniteScroll
                  className="content "
                  dataLength={data?.results?.length || []}
                  next={fetchNextPageData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                >
                  {data.results.map((item, index) => {
                    if (item.media_type === "person") return;
                    return (
                      <MovieCard key={index} data={item} fromSearch={true} />
                    );
                  })}
                </InfiniteScroll>
              </>
            ) : (
              <>
                <span className="resultNotFound">Results Not Found</span>
                <span className="resultNotFoundImg">
                  <img src={noResults} />
                </span>
              </>
            )}
          </ContentWrapper>
        )}
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className=" icon topIcon">
            <FaArrowAltCircleUp />
          </span>
        </Link>
      </div>
    </>
  );
};

export default SearchResult;
