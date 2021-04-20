import React from "react";
import styled from "@emotion/styled";

const WhereverLink = styled.a`
  text-decoration: none;
  cursor: point;
  &:visited {
    text-decoration: none;
    color: black;
  }
`;
const WhereverImg = styled.img`
  border-radius: 10px;
  width: 100%;
  &:after {
    padding-bottom: 100%;
  }
`;
const WhereverText = styled.div`
  font-family: inherit;
  font-size: 18px;
  font-weight: 600;
  margin-top: 10px;
`;
const WhereverPlaceWrapper = styled.li`
  margin-right: 20px;
`;

const WhereverPlace = (props) => {
  return (
    <WhereverPlaceWrapper>
      <WhereverLink href={props.link}>
        <WhereverImg src={props.src}></WhereverImg>
        <WhereverText>{props.text}</WhereverText>
      </WhereverLink>
    </WhereverPlaceWrapper>
  );
};

export default WhereverPlace;
