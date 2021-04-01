import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarSubComponentForAccommodation from "./NavBarSub";
import NavbarSubComponentForexperience from "./NavBarSub2";
import { useState, useEffect } from "react";


const NavbarBg = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  background-color: transparent;
`;
const NavbarMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
  font-size: 14px;
  font-family: "Circular Air Pro";
  font-weight: 600;
  background-color: ${(props) => (props.scroll ? "white" : "black")};
  color: ${(props) => (props.scroll ? "black" : "white")};
  padding: 0 80px;
  line-height: 30px;
`;
const AirBnbTitle = styled.div`
  padding-top: 2px;
  padding-left: 8px;
  font-size: 25px;
`;
const NavbarMainLeft = styled.div`
  display: flex;
`;
const NavbarSub = styled.div``;
const NavbarMainMiddle = styled.div``;
const ScrolledMiddleText = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 300px;
height: 45px;
border: 1px solid #C1C1C1;
border-radius: 30px;
padding-left: 20px;
padding-top: 1px;
`;
const NavbarSubSeachIconLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: white;
  width: 35px;
  height: 35px;
  background-color: ff385c;
  margin-right: 10px;
`;
const ScrolledMiddleTextContainer = styled.div`
  display: ${(props) => (props.scroll ? "block" : "none")};
`;
const NavbarMainMiddleTexts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-left: 100px;
`;
const NavbarMainMiddleTextsContainer = styled.div`
display: ${(props) => (props.scroll ? "none" : "block")};
`;
const NavbarAccommodation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:after {
    line-height: 200;
    width: 16px;
    content: "";
    display: block;
    border: 1px solid white;
    border-radius: 30px;
  }
`;
const NavbarExperience = styled.div``;
const NavbarOnlineExperience = styled.div``;

const NavbarMainRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;
const NavBar = () => {
  const [isScrollToggled, setIsScrollToggled] = useState();
  const [isAccommodationSubNavbarOn, setIsAccommodationSubNavbarOn] = useState(true);
  const [isExperienceSubNarbarOn, setIsExperienceSubNarbarOn] = useState();

  const scrollToggle = window.addEventListener("scroll", (e) => {
    const scrollPosition = window.scrollY;
    const navbarPosition = 70;
    if (scrollPosition > navbarPosition) {
      setIsScrollToggled(true);
      setIsAccommodationSubNavbarOn(true);
      setIsExperienceSubNarbarOn(true);
    } else if (navbarPosition >= scrollPosition) {
      setIsScrollToggled(false);
      setIsAccommodationSubNavbarOn(false);
      setIsExperienceSubNarbarOn(false);
      console.log(isAccommodationSubNavbarOn,"accommo")
      console.log(isScrollToggled,'scroll')
    }
  });
  
  function clickAccommodationBtn () {
    setIsAccommodationSubNavbarOn(true);
  }

  function clickExperienceBtn () {
    setIsAccommodationSubNavbarOn(false);
    setIsExperienceSubNarbarOn(true);
  }

  

  return (
    <NavbarBg>
      <NavbarMain scroll={isScrollToggled}>
        <NavbarMainLeft>
          <FontAwesomeIcon icon={["fab", "airbnb"]} size="2x" />
          <AirBnbTitle>airbnb</AirBnbTitle>
        </NavbarMainLeft>
        <NavbarMainMiddle>
          <NavbarMainMiddleTextsContainer scroll={isScrollToggled}>
            <NavbarMainMiddleTexts>
              <div>
                <NavbarAccommodation onClick={clickAccommodationBtn}>숙소</NavbarAccommodation>
              </div>
              <div>
                <NavbarExperience onClick={clickExperienceBtn}>체험</NavbarExperience>
              </div>
              <div>
                <NavbarOnlineExperience>온라인 체험</NavbarOnlineExperience>
              </div>
            </NavbarMainMiddleTexts>
          </NavbarMainMiddleTextsContainer>

          <ScrolledMiddleTextContainer scroll={isScrollToggled}>
            <ScrolledMiddleText>
              
                <div>검색 시작하기</div>
                <NavbarSubSeachIconLabel>
                  <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
                </NavbarSubSeachIconLabel>
              
            </ScrolledMiddleText>
          </ScrolledMiddleTextContainer>
        </NavbarMainMiddle>
        <NavbarMainRight>
          <div>호스트 되기</div>
          <div>아이콘</div>
          <div>햄버거</div>
        </NavbarMainRight>
      </NavbarMain>
      <NavbarSub>
        <NavbarSubComponentForAccommodation scroll={isScrollToggled} accommodation={isAccommodationSubNavbarOn} experience={isExperienceSubNarbarOn} />
        <NavbarSubComponentForexperience scroll={isScrollToggled} accommodation={isAccommodationSubNavbarOn} experience={isExperienceSubNarbarOn} />
      </NavbarSub>
    </NavbarBg>
  );
};

export default NavBar;
