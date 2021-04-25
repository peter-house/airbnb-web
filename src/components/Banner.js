import React from "react";
import styled from "@emotion/styled";

const BannerBg = styled.div`
  background-color: black;
  width: 100%;
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`;
const BannerText = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 400;
  font-family: "BlinkMacSystemFont";
  padding: 27px 0 32px;
  color: red;
`;

const Banner = () => {
  return (
    <BannerBg>
      <img srcSet="https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560 1x, https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560 2x"/>
      {/* <BannerText>호스트 분들이 있기에 가능합니다</BannerText> */}
    </BannerBg>
  );
};
export default Banner;

