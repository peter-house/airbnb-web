import React from "react";
import styled from "@emotion/styled";
import SpecialPlace from "./SpecialPlace";

const SpecialBg = styled.div`
  width: 100%;
  height: 82%;
  padding-top: 150px;
  padding-left: 80px;
`;

const SpecialTextsContainer = styled.div``;
const SpecialText = styled.div`
  font-size: 32px;
  font-weight: 700;
`;

const SpecialSubText = styled.div`
  font-size: 26px;
  margin-bottom: 20px;
`;

const SpecialWaysCotainer = styled.div`
  display: flex;
`;

const SpecialWay = () => {
  const PLACES = [
    {
      img:
        "https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720",
      link: "https://www.airbnb.co.kr/s/experiences/online",
      text: "온라인 체험",
      subText: "집에서 즐기는 랜선 세계 여행",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720",
      link: "https://www.airbnb.co.kr/s/experiences?location_search=NEARBY",
      text: "체험",
      subText: "어디에서든 즐길 수 있는 체험",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720",
      link: "https://www.airbnb.co.kr/s/adventures",
      text: "어드벤처",
      subText: "숙박과 식사가 포함된 며칠 일정의 여행",
    },
  ];
  return (
    <SpecialBg>
      <SpecialTextsContainer>
        <SpecialText>세상을 만나는 특별한 방법</SpecialText>
        <SpecialSubText>
          현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로
          만나보세요.
        </SpecialSubText>
      </SpecialTextsContainer>
      <SpecialWaysCotainer>
        {PLACES.map((place, index) => {
          return (
          <SpecialPlace 
          link={place.link} 
          img={place.img} 
          text={place.text} 
          subText={place.subText} 
          key={index}
          />
          );
        })}
      </SpecialWaysCotainer>
    </SpecialBg>
  );
};
export default SpecialWay;
