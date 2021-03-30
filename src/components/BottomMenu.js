import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  padding-right: 8vw;
`;
const BottomMenuTitles = styled.div`
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 20px;
  font-family: Circular;
`;
const Introduce = styled.div``;
const IntroduceMenu = styled.div`
  font-size: 14px;
  font-family: inherit;
  padding-bottom: 20px;
`;
const Community = styled.div``;
const DoHosting = styled.div``;
const AirbnbSupport = styled.div``;
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
const FaceBookIcon = styled.div `
padding-right: 25px;
`
const TweeterIcon = styled.div `
padding-right: 25px;
`
const InstaIcon = styled.div `
padding-right: 25px;
`


const BottomMenu = () => {
  const INTRODUCE_MENUS = [
    "에어비앤비 이용 방법",
    "뉴스룸",
    "투자자 정보",
    "에어비앤비 플러스",
    "에어비앤비 Luxe",
    "호텔투나잇",
    "에어비앤비 비즈니스 프로그램",
    "호스트 분들이 있기에 가능합니다",
    "채용정보",
    "창립자 편지",
  ];
  const COMMUNITY_MENUS = [
    "다양성 및 소속감",
    "접근성",
    "에어비앤비 어소시에이트",
    "구호 인력을 위한 숙소",
    "게스트 추천",
    "Airbnb.org",
  ];
  const DO_HOSTING_MENUS = [
    "숙소 호스팅",
    "온라인 체험 호스팅하기",
    "체험 호스팅하기",
    "책이미감 있는 호스팅",
    "자료 센터",
    "커뮤니티 센터",
  ];
  const AIRBNB_SUPPORT_MENUS = [
    "에어비앤비의 코로나19 대응 방안",
    "도움말 센터",
    "투자자 정보",
    "예약 취소 옵션",
    "에어비앤비 이웃 민원 지원",
    "신뢰와 안전",
  ];
  return (
    <BottonMenuBg>
      <BottomMenusContainer>
        <Introduce>
          <BottomMenuTitles>소개</BottomMenuTitles>
          {INTRODUCE_MENUS.map((introduceMenu, index) => {
            return <IntroduceMenu key={index} >{introduceMenu}</IntroduceMenu>;
          })}
        </Introduce>

        <Community>
          <BottomMenuTitles>커뮤니티</BottomMenuTitles>
          {COMMUNITY_MENUS.map((introduceMenu, index) => {
            return <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>;
          })}
        </Community>

        <DoHosting>
          <BottomMenuTitles>호스팅하기</BottomMenuTitles>
          {DO_HOSTING_MENUS.map((introduceMenu, index) => {
            return <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>;
          })}
        </DoHosting>

        <AirbnbSupport>
          <BottomMenuTitles>에어비앤비 지원</BottomMenuTitles>
          {AIRBNB_SUPPORT_MENUS.map((introduceMenu, index) => {
            return <IntroduceMenu key={index}>{introduceMenu}</IntroduceMenu>;
          })}
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
