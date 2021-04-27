import React from "react";
import styled from "@emotion/styled";

const BannerBg = styled.div`
  background-image: url("https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560");
  width: 100%;
  height: 810px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover !important;
`;
const BannerText = styled.div`
  line-height: 62px;
  font-weight: 700;
  color: black;
  font-size: 60px;
  font-family: "BlinkMacSystemFont";
  padding: 27px 0 16px;
`;
const BannerSubText = styled.div`
  font-weight: 400;
  padding-bottom: 16px;
  font-height: 10px;
  font-size: 20px;
`
const BannerTexts = styled.div`
  position: relative;
  top: 330px;
  left: -500px;
  padding-left: 80px;
  `
const BannerBtn = styled.a`
  color: white;
  background-color: black;
  width: 145px;
  height: 36px;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

const Banner = () => {
  const BannerTitle = ["슬기로운", <br />, "자연생활"];
  return (
    <BannerBg>
      <BannerTexts>
        <BannerText>{BannerTitle}</BannerText>
        <BannerSubText>에어비앤비가 엄선한 위시리스트를 만나보세요.</BannerSubText>
        <BannerBtn href={"https://www.airbnb.co.kr/s/all?refinement_paths%5B%5D=%2Fplaylists%2F46837"}> 여행 아이디어 얻기</BannerBtn>
      </BannerTexts>
    </BannerBg>
  );
};
export default Banner;
