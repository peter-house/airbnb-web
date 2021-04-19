import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchingNavbar from "./SearchingNavbar";
import { useState } from "react";

const NavbarSubBg = styled.div`
  display: ${(props) => (props.subNavbar ? "none" : "block")};
`;
const NavbarSubForAccommodation = styled.div``;
const NavbarSubForExperience = styled.div``;
const ForAccommodationBg = styled.div`
  display: flex;
  justify-content: center;
`;
const ForAccommodationTextsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 58vw;
  background-color: white;
  border: 1px solid #c1c1c1;
  border-radius: 30px;
  height: 64px;
  padding-left: 20px;
`;
const LocationTextContainer = styled.div`
  box-shadow: ${(props) =>
    props.isLocationDisplayOn
      ? ("5px 0px 10px #ebebeb", "5px 0px 10px #ebebeb")
      : "none"};
  position: relative;
  left: -21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  width: ${(props) => (props.experience ? "39vw" : "300px")};
  height: 60px;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
`;
const NavbarSubText = styled.div`
  padding-left: ${(props) => (props.padding ? "20px" : "none")};
  font-size: 12px;
  font-weight: 800;
`;
const NaberLocationInput = styled.input`
  padding-left: 20px;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
`;
const NavbarSubUnderText = styled.div`
  padding-left: ${(props) => (props.padding ? "20px" : "none")};
  font-size: 14px;
  font-weight: 400;
  color: #717171;
`;
const CheckInTextContainer = styled.div`
box-shadow: ${(props) =>
  props.isChechInOutDisplayOn ? "5px 0px 10px #ebebeb" : "none"};
display: flex;
flex-direction: column;
justify-content: center;
width: 12vw;
height: 60px;
border: 1px solid transparent;
border-radius: 30px;
margin-left: -20px;
cursor: pointer;
&:hover {
    background-color: #ebebeb;
}
}
`;
const CheckOutTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 12vw;
height: 60px;
border: 1px solid transparent;
border-radius: 30px;
cursor: pointer;
&:hover {
    background-color: #ebebeb;
}
}
`;
const PersonnelTextContainer = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 19.5vw;
height: 60px;
border: 1px solid transparent;
border-radius: 30px;
cursor: pointer;
&:hover {
    background-color: #ebebeb;
}
}
`;
const PersonnelTextWrapper = styled.div``;
const NavbarSubTextsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 40vw;
`;
const NavbarSubTextsWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 28.35vw;
  height: 60px;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb;
  }
`;
const NavbarSubTextsContainer = styled.div`
  display: ${(props) => (props.accommodation ? "block" : "none")};
`;
const NavbarSubTextsContainer2 = styled.div`
  display: ${(props) => (props.experience ? "block" : "none")};
`;
const NavbarSearchIconLabel = styled.label`
  position: relative;
  right: ${(props) => (props.position ? "0" : "-40px")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: white;
  width: 50px;
  height: 50px;
  background-color: ff385c;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const NavbarSearchBtnWrapper = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const NavbarSubComponent = (props) => {
  const [isLocationDisplayOn, setIsLocationDisplayOn] = useState(false);
  const [isChechInOutDisplayOn, setIsChechInOutDisplayOn] = useState(false);
  const [isPersonnelDisplayOn, setIsPersonnelDisplayOn] = useState(false);
  const [guestNum, setGuestNum] = useState(0);
  const [searchedLocation, setSearchedLocation] = useState([]);
  const [typedLocation, setTypedLocation] = useState();
  const [filteredLocation, setFilteredLocation] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [RawSartDate, setRawSartDate] = useState();
  const [RawEndDate, setRawEndDate] = useState();

  const splitSearchedLocation = searchedLocation || "없음".split("");

  const searchBtnUrl =
    "https://www.airbnb.co.kr/s/대한민국-서울-용산구/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=" +
    RawSartDate +
    "&checkout=" +
    RawEndDate +
    "&adults=" +
    guestNum +
    "&query=대한민국%20" +
    splitSearchedLocation[0] +
    "%20" +
    splitSearchedLocation[1] +
    "&place_id=ChIJ0z8xfjyifDURF7H5KqUsNKQ&source=structured_search_input_header&search_type=autocomplete_click";

  function getRawformatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  }
  function handleStartDate(date) {
    setRawSartDate(getRawformatDate(date));
    setStartDate(getFormatDate(date));
  }
  function handleEndDate(date) {
    setRawEndDate(getRawformatDate(date));
    if (date === "날짜 입력") {
      return;
    }
    setEndDate(getFormatDate(date));
    console.log("end", endDate);
  }
  function offLocationDisplay() {
    setIsLocationDisplayOn(false);
  }
  function onChechInOutDisplay() {
    setIsChechInOutDisplayOn(true);
  }
  function getFormatDate(date) {
    let month = 1 + date.getMonth();
    let day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    let showingDate = month + "월 " + day + "일";
    return showingDate;
  }
  function selecteLocation(location) {
    setSelectedLocation(location);
  }

  function clickLocationBtn() {
    setIsLocationDisplayOn(true);
    setIsChechInOutDisplayOn(false);
    setIsPersonnelDisplayOn(false);
  }
  function clickCheckInBtn() {
    setIsLocationDisplayOn(false);
    setIsPersonnelDisplayOn(false);
    setIsChechInOutDisplayOn(!isChechInOutDisplayOn);
  }
  function clickCheckOutBtn() {
    setIsLocationDisplayOn(false);
    setIsPersonnelDisplayOn(false);
    setIsChechInOutDisplayOn(!isChechInOutDisplayOn);
  }
  function clickPesonnelBtn() {
    setIsLocationDisplayOn(false);
    setIsChechInOutDisplayOn(false);
    setIsPersonnelDisplayOn(!isPersonnelDisplayOn);
  }
  function handleGuestNum(numOfGuest) {
    setGuestNum(numOfGuest);
  }
  function getLocationDatas() {
    fetch("http://localhost:3000/location")
      .then((res) => res.json())
      .then((data) => {
        const locationList = data.map((eachData) => {
          return eachData.place;
        });
        setSearchedLocation(locationList);
      });
  }
  function filterLocation() {
    const locationList = searchedLocation.filter((location) => {
      if (location.includes(typedLocation)) {
        return location;
      }
    });
    return locationList;
  }
  function handleLocationKeyDown(event) {
    console.log("click");
    const typedLocation = event.target.value;
    getLocationDatas();
    setTypedLocation(typedLocation);
    setFilteredLocation(filterLocation());
  }
  function HandleOnModifyMode() {
    setSelectedLocation();
  }
  function stopPropagation(event) {
    console.log(searchBtnUrl);
    event.stopPropagation();
  }
  return (
    <NavbarSubBg subNavbar={props.subNavbar}>
      <NavbarSubForAccommodation>
        <ForAccommodationBg>
          <ForAccommodationTextsWrapper>
            <LocationTextContainer
              isLocationDisplayOn={isLocationDisplayOn}
              onClick={clickLocationBtn}
              experience={props.experience}
            >
              <NavbarSubText padding>위치</NavbarSubText>
              <NaberLocationInput
                onClick={HandleOnModifyMode}
                onKeyUpCapture={handleLocationKeyDown}
                type="text"
                placeholder={"어디로 여행가세요?"}
                value={selectedLocation}
              ></NaberLocationInput>
            </LocationTextContainer>
            <NavbarSubTextsContainer accommodation={props.accommodation}>
              <NavbarSubTextsWrapper>
                <CheckInTextContainer
                  isChechInOutDisplayOn={isChechInOutDisplayOn}
                  onClick={clickCheckInBtn}
                >
                  <NavbarSubText padding>체크인</NavbarSubText>
                  <NavbarSubUnderText padding>
                    {startDate || "날짜 입력"}
                  </NavbarSubUnderText>
                </CheckInTextContainer>
                <CheckOutTextContainer onClick={clickCheckOutBtn}>
                  <NavbarSubText padding>체크아웃</NavbarSubText>
                  <NavbarSubUnderText padding>
                    {endDate || "날짜 입력"}
                  </NavbarSubUnderText>
                </CheckOutTextContainer>
                <PersonnelTextContainer onClick={clickPesonnelBtn}>
                  <PersonnelTextWrapper>
                    <NavbarSubText>인원</NavbarSubText>
                    <NavbarSubUnderText>
                      {guestNum == 0
                        ? "게스트 추가"
                        : "게스트 " + guestNum + " 명"}
                    </NavbarSubUnderText>
                  </PersonnelTextWrapper>
                  <NavbarSearchBtnWrapper
                    onClick={stopPropagation}
                    href={searchBtnUrl}
                  >
                    <NavbarSearchIconLabel>
                      <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
                    </NavbarSearchIconLabel>
                  </NavbarSearchBtnWrapper>
                </PersonnelTextContainer>
              </NavbarSubTextsWrapper>
            </NavbarSubTextsContainer>
            <NavbarSubTextsContainer2 experience={props.experience}>
              <NavbarSubTextsWrapper2>
                <div>
                  <NavbarSubText padding>날짜</NavbarSubText>
                  <NavbarSubUnderText padding>
                    원하는 날짜를 입력하세요.
                  </NavbarSubUnderText>
                </div>
                <NavbarSearchIconLabel position>
                  <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
                </NavbarSearchIconLabel>
              </NavbarSubTextsWrapper2>
            </NavbarSubTextsContainer2>
          </ForAccommodationTextsWrapper>
        </ForAccommodationBg>
      </NavbarSubForAccommodation>
      <NavbarSubForExperience></NavbarSubForExperience>
      <SearchingNavbar
        onChechInOutDisplay={onChechInOutDisplay}
        offLocationDisplay={offLocationDisplay}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
        typedLocation={typedLocation}
        filteredLocation={filteredLocation}
        handleGuestNum={handleGuestNum}
        isLocationDisplayOn={isLocationDisplayOn}
        isChechInOutDisplayOn={isChechInOutDisplayOn}
        isPersonnelDisplayOn={isPersonnelDisplayOn}
        selecteLocation={selecteLocation}
      />
    </NavbarSubBg>
  );
};

export default NavbarSubComponent;
