import React from "react";
import styled from "@emotion/styled";

const GlobePageBg = styled.div`
  display: ${(props) => (props.isGlobePageOn ? "block" : "none")};
  position: absolute;
  top: 10px;
  left: 250px;
  width: 70vw;
  height: 800px;
  color: black;
  z-index: 2;
  border-radius: 13px;
  background-color: white;
`;

const GlobePage = (props) => {
  return <GlobePageBg isGlobePageOn={props.isGlobePageOn}>hi</GlobePageBg>;
};

export default GlobePage;
