import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const BottonMenuBg = styled.div`
display: flex:
flex-direction: colunm;
padding: 60px 80px 20px 80px ;
background-color: #f7f7f7;
border-top: 0.5px solid #C1C1C1;
`;
const BottomMenusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const BottomMenuTitles = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 20px;
  font-family: Circular;
`;
const Introduce = styled.div`
display: flex;
flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;
const IntroduceMenu = styled.a`
  font-size: 14px;
  font-family: inherit;
  padding-bottom: 20px;
  text-decoration: none;
color: black;
display: flex;
flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`;
const Community = styled.a`
display: flex;
flex-direction: column;
text-decoration: none;
color: black;
  &:hover {
    cursor: pointer;
  }
`;
const DoHosting = styled.a`
display: flex;
flex-direction: column;
text-decoration: none;
color: black;
  &:hover {
    cursor: pointer;
  }
`;
const AirbnbSupport = styled.a`
display: flex;
flex-direction: column;
text-decoration: none;
color: black;
  &:hover {
    cursor: pointer;
  }
`;
const BottomMenuBorder = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 0.5px;
  background: #c1c1c1;
`;
const AirBnbRights = styled.div`
  display: flex;
  justify-content: space-between;
`;
const RightsLeft = styled.div`
  font-size: 14px;
`;
const RightsRight = styled.div`
  display: flex;
  flex-direction: colunm;
  jusfity-content: space-between;
  width: 10vw;
`;
const FaceBookIcon = styled.div`
  padding-right: 25px;
`;
const TweeterIcon = styled.div`
  padding-right: 25px;
`;
const InstaIcon = styled.div`
  padding-right: 25px;
`;
const BottomMenu = () => {
  const [bottomMenuList, setBottomMenuAPIs] = useState();
  const getBottomMenuAPIs = () => {
    fetch("http://localhost:3000/bottomMenus")
      .then((res) => res.json())
      .then((data) => {
        setBottomMenuAPIs(data);
      });
  };
  useEffect(() => {
    getBottomMenuAPIs();
  }, []);

  return (
    <BottonMenuBg>
      <BottomMenusContainer>
        <Introduce href={"https://www.airbnb.co.kr/help/home"}>
          <BottomMenuTitles>소개</BottomMenuTitles>
          {bottomMenuList
            ? bottomMenuList[0].INTRODUCE_MENUS.map((introduceMenu, index) => {
                return (
                  <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>
                );
              })
            : "loading.."}
        </Introduce>
        <Community href={"https://www.airbnb.co.kr/help/home"}>
          <BottomMenuTitles>커뮤니티</BottomMenuTitles>
          {bottomMenuList
            ? bottomMenuList[1].COMMUNITY_MENUS.map((introduceMenu, index) => {
                return (
                  <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>
                );
              })
            : "loading.."}
        </Community>
        <DoHosting href={"https://www.airbnb.co.kr/help/home"}>
          <BottomMenuTitles>호스팅하기</BottomMenuTitles>
          {bottomMenuList
            ? bottomMenuList[2].DO_HOSTING_MENUS.map((introduceMenu, index) => {
                return (
                  <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>
                );
              })
            : "loading.."}
        </DoHosting >
        <AirbnbSupport href={"https://www.airbnb.co.kr/help/home"} >
          <BottomMenuTitles>에어비앤비 지원</BottomMenuTitles>
          {bottomMenuList
            ? bottomMenuList[3].AIRBNB_SUPPORT_MENUS.map(
                (introduceMenu, index) => {
                  return (
                    <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>
                  );
                }
              )
            : "loading.."}{" "}
        </AirbnbSupport>
      </BottomMenusContainer>
      <BottomMenuBorder></BottomMenuBorder>
      <AirBnbRights>
        <RightsLeft>
          © 2021 Airbnb, Inc. All rights reserved · 개인정보 처리방침 · 이용약관
          · 사이트맵 · 한국의 변경된 환불 정책 · 회사 세부정보
        </RightsLeft>
        <RightsRight>
          <FaceBookIcon>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </FaceBookIcon>
          <TweeterIcon>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </TweeterIcon>
          <InstaIcon>
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </InstaIcon>
        </RightsRight>
      </AirBnbRights>
    </BottonMenuBg>
  );
};
export default BottomMenu;
