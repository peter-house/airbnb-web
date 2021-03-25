import React from "react";
import styled from "@emotion/styled";


const NearPlaceBg = styled.div `
max-width: 1760px;
height: 212px;
padding: 60px 80px 0px 80px;
`
const NearPlaceTitle = styled.div `
    width: 100%;
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 20px;
`
const PlaceContainer = styled.div `
    display: flex;
    align-items: center;
`

const NearPlaceText = styled.div `
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 2px;
`
const NearPlaceIcon = styled.img `
width: 64px;
height: 64px;
margin-right: 16px;
border-radius: 10px;

`

const NearPlace = () => {
  return (
    <>
      <NearPlaceBg>
          <NearPlaceTitle>
                  가까운 여행지 둘러보기
          </NearPlaceTitle>
          <div className="places-container">
              <PlaceContainer>
                  <NearPlaceIcon src="https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720"></NearPlaceIcon>
                  <div className="nearplace-texts">
                      <NearPlaceText>서울</NearPlaceText>
                      <div className="nearplace-subtext">차로 15분 거리</div>
                  </div>
              </PlaceContainer>
          </div>
        </NearPlaceBg>
    </>
  );
};

export default NearPlace;
