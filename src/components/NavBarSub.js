import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarSubBg = styled.div``;

const NavbarSubForAccommodation = styled.div``;
const NavbarSubForExperience = styled.div``;
const ForAccommodationBg = styled.div`
  display: flex;
  justify-content: center;
`;
const ForAccommodationTextsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  background-color: white;
  border: 1px solid #C1C1C1;
  border-radius: 30px;
  height: 64px;
  padding-left: 20px;
`;

const NavbarSubText = styled.div `
font-size: 12px;
font-weight: 800;
`
const NaberLocationInput = styled.input `
border: none;
`
const NavbarSubUnderText = styled.div `
font-size: 14px;
font-weight: 400;
color: #717171;
`
const NavbarSearchIconLabel = styled.label`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
color: white;
width: 50px;
height: 50px;
  background-color: ff385c;
  margin-right: 10px;
`;

const NavbarSubComponent = () => {
  return (
    <NavbarSubBg>
      <NavbarSubForAccommodation>
        <ForAccommodationBg>
          <ForAccommodationTextsWrapper>
              <div>
              <NavbarSubText>위치</NavbarSubText>
              <NaberLocationInput type="text" placeholder="어디로 여행가세요?"></NaberLocationInput>
              </div>
              <div>
              <NavbarSubText>체크인</NavbarSubText>
              <NavbarSubUnderText>날짜 입력</NavbarSubUnderText>
              </div>
              <div>
              <NavbarSubText>체크아웃</NavbarSubText>
              <NavbarSubUnderText>날짜 입력</NavbarSubUnderText>
              </div>
              <div>
              <NavbarSubText>인원</NavbarSubText>
              <NavbarSubUnderText>게스트 추가</NavbarSubUnderText>
              </div>
           <NavbarSearchIconLabel>
            <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
            </NavbarSearchIconLabel>
          </ForAccommodationTextsWrapper>



        </ForAccommodationBg>
      </NavbarSubForAccommodation>
      <NavbarSubForExperience></NavbarSubForExperience>
    </NavbarSubBg>
  );
};

export default NavbarSubComponent;
