import React from "react";
import styled from "@emotion/styled";

const NearPlaceIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 10px;
`;
const NearPlaceText = styled.div`
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 2px;
`;
const PlaceContainer = styled.li`
  display: flex;
  align-items: center;
  width: 210px;
  margin-bottom: 25px;
`;
const PlaceLink = styled.a`
  text-decoration: none;
  cursor: point;
  &:visited {
  text-decoration: none;
  color: black;
  }
`;
const NearPlaceTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Place = (props) => {
 
  return (
          <PlaceLink href={props.link}>
            <PlaceContainer>
              <NearPlaceIcon src={props.src}></NearPlaceIcon>
              <NearPlaceTextsContainer>
                <NearPlaceText>{props.text}</NearPlaceText>
                <div className="nearplace-subtext">{props.subText}</div>
              </NearPlaceTextsContainer>
            </PlaceContainer>
          </PlaceLink>
  );
};

export default Place;
