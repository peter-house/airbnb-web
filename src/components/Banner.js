import React from "react";
import styled from '@emotion/styled';

const BannerBg = styled.div`
  background-color: black;
  width: 100%;
  height: 522px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 122px 0 0;
`
const BannerText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 400;
  font-family: "BlinkMacSystemFont";
  padding: 27px 0 32px; 
`
const BannerImg = styled.img `
  display: flex;
`

const Banner = () => {
  return (
      <BannerBg>
        <BannerImg srcSet="https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/166791ff-bc82-4b88-ba3d-49be1d462dce.jpg?im_w=2560 2x"></BannerImg>
        <BannerText>호스트 분들이 있기에 가능합니다</BannerText>
      </BannerBg>
  );
};

export default Banner;
