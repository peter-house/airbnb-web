import React from "react";
import css from "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-bg">
        <img className="banner-img" srcSet="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560 2x"></img>
        <div className="banner-text">호스트 분들이 있기에 가능합니다</div>
      </div>
    </>
  );
};

export default Banner;
