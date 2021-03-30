import React from "react";
import styled from "@emotion/styled";

const SpecialImg = styled.img`
  width: 29vw;
  height: 29vw;
  border-radius: 10px;

  &:after {
    padding-bottom: 100%;
  }
`;
const SpecialTexts = styled.div`
  margin-top: 10px;
`;
const SpecialTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  margin-bottom: 5px;
`;
const SpecialSubTitle = styled.div`
  line-height: 18px;
`;
const SpecialPlaceWrapper = styled.div`
  margin-right: 15px;
`;
const SpecialPlaceLink = styled.a`
  text-decoration: none;
  cursor: point;
  &:visited {
    text-decoration: none;
    color: black;
  }
`;
const SpecialPlace = (props) => {
  return (
    <SpecialPlaceLink href={props.link}>
      <SpecialPlaceWrapper>
        <SpecialImg src={props.img}></SpecialImg>
        <SpecialTexts>
          <SpecialTitle>{props.text}</SpecialTitle>
          <SpecialSubTitle>{props.subText}</SpecialSubTitle>
        </SpecialTexts>
      </SpecialPlaceWrapper>
    </SpecialPlaceLink>
  );
};
export default SpecialPlace;
