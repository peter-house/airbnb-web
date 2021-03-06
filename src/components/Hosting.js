import React from "react";
import styled from "@emotion/styled";

const HostingBg = styled.div`
  margin-top: 100px;
  max-width: 88.5vw;
  max-height: 400px;
  padding-left: 80px;
`;
const HostingBgImg = styled.div`
  background-image: url("https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=2560");
  width: 88.5 vw;
  height: 483px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;
const HostingTextContainer = styled.div`
  padding-left: 80px;
  padding-top: 110px;
`;
const HostingText = styled.div`
  font-size: 48px;
  font-family: "Circular";
  color: white;
`;
const HostingSubText = styled.div`
  font-size: 18px;
  font-family: "Circular";
  color: white;
  padding-top: 12px;
  padding-bottom: 38px;
`;
const HostingBtn = styled.button`
  font-size: 16px;
  font-family: "Circular";
  backgroud-color: white;
  padding: 14px 24px;
  border-radius: 10px;
  border-color: white:
  outline: none;
  &:focus {
    border-color: white:
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;
const HostingBtnlink = styled.a`
    border: none:
    outline: none;
`;
const Hosting = () => {
  const hostText = [
    "여러분의 세상을",
    <br />,
    "다른 사람들과",
    <br />,
    "나눠보세요.",
  ];
  return (
    <HostingBg>
      <HostingBgImg>
        <HostingTextContainer>
          <HostingText>{hostText}</HostingText>
          <HostingSubText>
            남는 공간을 활용해 새로운 기회를 만들어 보세요.
          </HostingSubText>
          <HostingBtnlink href="https://www.airbnb.co.kr/host/homes">
            <HostingBtn>호스팅 시작하기</HostingBtn>
          </HostingBtnlink>
        </HostingTextContainer>
      </HostingBgImg>
    </HostingBg>
  );
};
export default Hosting;
