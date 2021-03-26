import React from "react";
import styled from "@emotion/styled";
import Place from "./Place";


const NearPlaceBg = styled.div`
max-width: 1760px;
height: 250px;
padding: 60px 80px 0px 80px;
`;
const NearPlaceTitle = styled.div`
width: 100%;
font-size: 32px;
font-weight: 700;
padding-bottom: 20px;
`;
const PlaceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PlacesContainer =styled.ul `
padding-left: 0px;
list-style: none;
display: flex;  
flex-wrap: wrap;
`

const NearPlace = () => {
  return (
      <NearPlaceBg>
        <NearPlaceTitle>가까운 여행지 둘러보기</NearPlaceTitle>
        <PlacesContainer>
            <Place/>
        </PlacesContainer>
      </NearPlaceBg>
  );
};
export default NearPlace;
