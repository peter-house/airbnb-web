import React from "react";
import styled from "@emotion/styled";
import Place from "./Place";
import { useState, useEffect } from "react";

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
const PlacesContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const NearPlace = () => {
  const [placeAPI, setPlaceAPI] = useState();
  const getNearPlacesAPIs = () => {
    fetch("http://localhost:3000/nearPlaces")
      .then((res) => res.json())
      .then((data) => {
        setPlaceAPI(data);
      });
  };
  useEffect(() => {
    getNearPlacesAPIs();
  }, []);

  return (
    <NearPlaceBg>
      <NearPlaceTitle>가까운 여행지 둘러보기</NearPlaceTitle>
      <PlacesContainer>
        {placeAPI
          ? placeAPI.map((place, index) => {
              return (
                <Place
                  link={place.link}
                  src={place.img}
                  text={place.text}
                  subText={place.subText}
                  key={index}
                />
              );
            })
          : "loading..."}
      </PlacesContainer>
    </NearPlaceBg>
  );
};
export default NearPlace;
