import React from "react";
import styled from "@emotion/styled";

const BannerBg = styled.div`
  background-image: url("https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560");
  width: 100%;
  height: 720px;
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
  padding-bottom: 16px;
  font-height: 10px;
  font-size: 20px;
`
const BannerTexts = styled.div`
  position: relative;
  top: 280px;
  left: -500px;
  padding-left: 80px;
  `
const BannerBtn = styled.button`
  color: white;
  background-color: black;
  width: 145px;
  height: 36px;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
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
        <BannerBtn>여행 아이디어 얻기</BannerBtn>
      </BannerTexts>
    </BannerBg>
  );
};
export default Banner;
