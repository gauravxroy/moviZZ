// import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";
const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
      className={className || ""}
      alt="Hero-img"
      effect="blur"
      src={src}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
export default Img;
