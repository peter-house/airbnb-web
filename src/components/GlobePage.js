import React from "react";
import styled from "@emotion/styled";

const GlobePageBg = styled.div`
  display: ${(props) => (props.isGlobePageOn ? "block" : "none")};
  position: absolute;
  top: 50px;
  left: 250px;
  width: 70vw;
  height: 500px;
  color: black;
  padding-left: 20px;
  z-index: 2;
  border-radius: 13px;
  background-color: white;
`;
const GlobeCloseBtn = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 2px 1px 0 1px;
  width: 25px;
  height: 25px;
  border: 1px solid trasparent;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }
`;
const GlobeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  jusfity-content: center;
  width: 150px;
  height: 55px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 0 0 10px;
  line-height: 20px;
  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }
`;
const SubText = styled.div`
  color: rgb(113, 113, 113);
`;

const GlobePage = (props) => {
  function handleCloseGlobePage() {
    props.closeGlobePage();
  }
  function showAlert() {
    alert("한국어로 설정 되었습니다");
  }
  return (
    <GlobePageBg isGlobePageOn={props.isGlobePageOn}>
      <GlobeCloseBtn onClick={handleCloseGlobePage}>X</GlobeCloseBtn>
      <h2>언어와 지역을 선택하세요</h2>
      <GlobeTextWrapper onClick={showAlert}>
        <div>한국어</div>
        <SubText>대한민국</SubText>
      </GlobeTextWrapper>
    </GlobePageBg>
  );
};

export default GlobePage;
