import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useRef } from "react";
import NavbarSubComponent from "./NavBarSub";
import LoginMenu from "./LoginMenu";
import GlobePage from "./GlobePage";

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
  cursor: pointer;
`;
const NavbarSub = styled.div``;
const NavbarMainMiddle = styled.div``;
const ScrolledMiddleText = styled.div`
  position: relative;
  left: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 45px;
  border: 1px solid #c1c1c1;
  border-radius: 30px;
  padding-left: 20px;
  padding-top: 1px;
  font-weight: 500;
  &:hover {
    box-shadow: 0 2px 2px 2px #ddd;
    cursor: pointer;
  }
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
  position: relative;
  left: 20px;
  display: ${(props) => (props.scroll ? "none" : "block")};
`;
const NavbarAccommodation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:after {
    opacity: ${(props) => (props.accomodation ? "1" : "0")};
    line-height: 200;
    width: 16px;
    content: "";
    border: 1px solid white;
    border-radius: 30px;
    background-color: white;
  }
  &:hover {
    color: #c6c6c6;
    cursor: pointer;
    &:after {
      opacity: 1;
      width: ${(props) => (props.accomodation ? "16px" : "3px")};
      transition: all 0.1s linear;
    }
  }
`;
const NavbarExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:after {
    opacity: ${(props) => (props.experience ? "1" : "0")};
    line-height: 200;
    width: 16px;
    content: "";
    border: 1px solid white;
    border-radius: 30px;
    background-color: white;
  }
  &:hover {
    color: #c6c6c6;
    cursor: pointer;
    &:after {
      opacity: 1;
      width: ${(props) => (props.experience ? "16px" : "3px")};
      transition: all 0.1s linear;
    }
  }
`;
const NavbarOnlineExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  &:after {
    opacity: 0;
    line-height: 200;
    width: 1px;
    content: "";
    border: 1px solid white;
    border-radius: 30px;
  }
  &:hover {
    color: #c6c6c6;
    cursor: pointer;
    &:after {
      opacity: 1;
      width: 3px;
      transition: all 0.1s linear;
    }
  }
`;
const OnlineExperienceLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
const NavbarMainRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 220px;
`;
const NavbarMainRightGlobeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 30px;
  corsor: pointer;
  &:hover {
    background-color: ${(props) => (props.scroll ? "#f7f7f7" : "#262626")};
  }
`;
const NavbarMainRightIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  color: black;
  width: 75px;
  height: 40px;
  border: 1px solid #c7c7c7;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const HostLink = styled.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid transparent;
border-radius: 30px;
width: 90px;
height: 40px;
text-decoration: none;
cursor: point;
font-weight: 500;
&:hover {
  background-color: ${(props) => (props.scroll ? "#f7f7f7" : "#262626")};
}
  &:visited {
    text-decoration: none;
    color: inherit;
`;

const NavBar = () => {
  const [isScrollToggled, setIsScrollToggled] = useState(false);
  const [isSubNavbarOn, setIsSubNavbarOn] = useState(false);
  const [isAccommodationSubNavbarOn, setIsAccommodationSubNavbarOn] = useState(
    true
  );
  const [isUserMenuListOn, setIsUserMenuListOn] = useState(false);
  const [isExperienceSubNarbarOn, setIsExperienceSubNarbarOn] = useState(false);
  const [isGlobePageOn, setIsgelobePageOn] = useState(false);
  const menuListBtnRef = useRef();

  const scrollToggle = window.addEventListener("scroll", (e) => {
    const scrollPosition = window.scrollY;
    const NAVBAR_POSITION = 70;
    if (scrollPosition > NAVBAR_POSITION) {
      setIsScrollToggled(true);
      setIsSubNavbarOn(true);
    } else if (NAVBAR_POSITION >= scrollPosition) {
      setIsScrollToggled(false);
      setIsSubNavbarOn(false);
    }
  });
  function clickAccommodationBtn() {
    setIsAccommodationSubNavbarOn(true);
    setIsExperienceSubNarbarOn(false);
  }
  function clickExperienceBtn() {
    setIsAccommodationSubNavbarOn(false);
    setIsExperienceSubNarbarOn(true);
  }
  function clickUserMenuBtn(event) {
    setIsUserMenuListOn(!isUserMenuListOn);
    event.stopPropagation();
  }
  function handleClickGlobeIcon() {
    setIsgelobePageOn(!isGlobePageOn);
  }
  function offUserMenuList(display) {
    setIsUserMenuListOn(display);
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
                <NavbarAccommodation
                  accomodation={isAccommodationSubNavbarOn}
                  onClick={clickAccommodationBtn}
                >
                  숙소
                </NavbarAccommodation>
              </div>
              <div>
                <NavbarExperience
                  experience={isExperienceSubNarbarOn}
                  onClick={clickExperienceBtn}
                >
                  체험
                </NavbarExperience>
              </div>
              <OnlineExperienceLink href="https://www.airbnb.co.kr/s/experiences/online">
                <NavbarOnlineExperience>온라인 체험</NavbarOnlineExperience>
              </OnlineExperienceLink>
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
          <HostLink
            scroll={isScrollToggled}
            href="https://www.airbnb.co.kr/host/homes"
          >
            <div>호스트 되기</div>
          </HostLink>
          <NavbarMainRightGlobeIcon
            onClick={handleClickGlobeIcon}
            scroll={isScrollToggled}
          >
            <FontAwesomeIcon icon={["fas", "globe"]} size="1x" />
          </NavbarMainRightGlobeIcon>
          <GlobePage isGlobePageOn={isGlobePageOn} />
          <NavbarMainRightIcons ref={menuListBtnRef} onClick={clickUserMenuBtn}>
            <div>
              <FontAwesomeIcon icon={["fas", "bars"]} size="1x" />
            </div>
            <div>
              <FontAwesomeIcon
                icon={["fas", "user-circle"]}
                size="2x"
                color="#717171"
              />
            </div>
          </NavbarMainRightIcons>
          <LoginMenu
            userRef={menuListBtnRef}
            isUserMenuListOn={isUserMenuListOn}
            offUserMenuList={offUserMenuList}
          />
        </NavbarMainRight>
      </NavbarMain>
      <NavbarSub>
        <NavbarSubComponent
          scroll={isScrollToggled}
          accommodation={isAccommodationSubNavbarOn}
          experience={isExperienceSubNarbarOn}
          subNavbar={isSubNavbarOn}
        />
      </NavbarSub>
    </NavbarBg>
  );
};
export default NavBar;
