import React from "react";
import styled from "@emotion/styled";
import WhereverPlace from "./WhereverPlace";
import { useState, useEffect } from "react";

const WhereverBg = styled.div`
  padding: 20px 0 9px 80px;
  font-weight: 700;
  max-height: 400px;
`;
const WhereverTitle = styled.div`
  font-size: 32px;
`;
const WhereverPlacesContainer = styled.div`
  width: 89.5vw;
  display: flex;
`;
const WhereverPlaceContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
`;

const Wherever = () => {
  const [whereverPlacesAPI, setWhereverPlacesAPI] = useState();
  const getWhereverPlacesAPIs = () => {
    fetch("http://localhost:3000/whereverPlaces")
      .then((res) => res.json())
      .then((data) => {
        setWhereverPlacesAPI(data);
      });
  };
  useEffect(() => {
    getWhereverPlacesAPIs();
  }, []);

  return (
    <WhereverBg>
      <WhereverTitle>어디에서나, 여행은 살아보는거야!</WhereverTitle>
      <WhereverPlacesContainer>
        <WhereverPlaceContainer>
          {whereverPlacesAPI
            ? whereverPlacesAPI.map((place, index) => {
                return (
                  <WhereverPlace
                    link={place.link}
                    src={place.img}
                    text={place.text}
                    key={index}
                  />
                );
              })
            : "loading.."}
        </WhereverPlaceContainer>
      </WhereverPlacesContainer>
    </WhereverBg>
  );
};
export default Wherever;
