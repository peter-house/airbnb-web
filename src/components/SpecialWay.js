import React from "react";
import styled from "@emotion/styled";
import SpecialPlace from "./SpecialPlace";
import { useState, useEffect } from "react";



const SpecialBg = styled.div`
  width: 80%;
  height: 82%;
  padding-top: 150px;
  padding-left: 80px;
`;
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
  const [specialPlaceAPI, setSpecialPlaceAPI] = useState();
  const getSpecialPlaceAPI = () => {
    fetch("http://localhost:3000/specialPlaces")
    .then((res) => res.json())
    .then((data) => {
      setSpecialPlaceAPI(data);
    })
  };

  useEffect(() => {
    getSpecialPlaceAPI();
  }, []);

  return (
    <SpecialBg>
      <div>
        <SpecialText>세상을 만나는 특별한 방법</SpecialText>
        <SpecialSubText>
          현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로
          만나보세요.
        </SpecialSubText>
      </div>
      <SpecialWaysCotainer>
        {specialPlaceAPI? specialPlaceAPI.map((place, index) => {
          return (
          <SpecialPlace 
            link={place.link} 
            img={place.img} 
            text={place.text} 
            subText={place.subText} 
            key={index}
          />
          );
        }) : "Loading..."}
      </SpecialWaysCotainer>
    </SpecialBg>
  );
};
export default SpecialWay;
