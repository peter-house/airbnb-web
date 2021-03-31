import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavbarSubComponent from "./NavBarSub";

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
  background-color: black;
  color: white;
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
const NavbarMainMiddleTexts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-left: 100px;
`;
const NavbarAccommodation = styled.div `
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
`
const NavbarExperience = styled.div `
`
const NavbarOnlineExperience = styled.div `
`

const NavbarMainMiddleLines = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin-left: 100px;
`;
const NavbarMainMiddleLine = styled.div`
  width: 20px;
  height: 2px;
  background-color: white;
  border-radius: 30px;
`;

const NavbarMainRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const NavBar = () => {
    window.addEventListener('scroll', (e) => {
        const top = ReactDOM.findDOMNode(AirBnbTitle).getBoundingClientRect().top; 
        console.log(top)
        console.log(window.scrollY)
    }
    )
  return (
    <NavbarBg>
      <NavbarMain>
        <NavbarMainLeft>
          <FontAwesomeIcon icon={["fab", "airbnb"]} size="2x" />
          <AirBnbTitle>airbnb</AirBnbTitle>
        </NavbarMainLeft>
        <NavbarMainMiddle>
          <NavbarMainMiddleTexts>
            <div>
              <NavbarAccommodation>숙소</NavbarAccommodation>
            </div>
            <div>
              <NavbarExperience>체험</NavbarExperience>
            </div>
            <div>
              <NavbarOnlineExperience>온라인 체험</NavbarOnlineExperience>
            </div>
          </NavbarMainMiddleTexts>
          {/* <NavbarMainMiddleLines>
            <NavbarMainMiddleLine></NavbarMainMiddleLine>
            <NavbarMainMiddleLine></NavbarMainMiddleLine>
            <NavbarMainMiddleLine></NavbarMainMiddleLine>
          </NavbarMainMiddleLines> */}
        </NavbarMainMiddle>
        <NavbarMainRight>
          <div>호스트 되기</div>
          <div>아이콘</div>
          <div>햄버거</div>
        </NavbarMainRight>
      </NavbarMain>
      <NavbarSub>
        <NavbarSubComponent />
      </NavbarSub>
    </NavbarBg>
  );
};

export default NavBar;
