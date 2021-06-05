import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchingNavbar from "./SearchingNavbar";
import { useState, useEffect} from "react";
import { getRawformatDate } from "../../utils/RawFormatDate";
import { getFormatDate } from "../../utils/FormatDate";
import { getLocationData as _getLocationData } from "../../apis";
import { entries } from "lodash";

const NavbarSubBg = styled.div`
  display: ${(props) => (props.isSubNavbarOn ? "none" : "block")};
`;
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
  left: -20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.experience ? "39vw" : "20vw")};
  height: 62px;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
  &:focus {
  &:hover {
    background-color: ${(props) =>
      props.isLocationDisplayOn ? "white" : "#ebebeb"};
  }
}
`;
const TimesIconWrapper = styled.label`
  margin-right: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ebebeb;
  border: 1px solid transparent;
  border-radius: 30px;
  &:hover {
    cursor: pointer;
  }
`;
const TimesIconContainer = styled.div`
  display: ${(props) => (props.cancelIconDisplay ? "block" : "none")};
`;
const NavbarSubText = styled.div`
  padding-left: ${(props) => (props.padding ? "20px" : "none")};
  font-size: 12px;
  font-weight: 800;
`;
const NavbarLocationInput = styled.input`
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
  props.checkInOutMode == "check-in" ? "5px 0px 10px #ebebeb" : "none"};
display: flex;
flex-direction: column;
justify-content: center;
width: 12vw;
height: 62px;
border: 1px solid transparent;
border-radius: 30px;
margin-left: -20px;
cursor: pointer;
&:hover {
    background-color: ${(props) =>
      props.checkInOutMode == "check-in" ? "white" : "#ebebeb"};
}
}
`;
const CheckOutTextContainer = styled.div`
box-shadow: ${(props) =>
  props.checkInOutMode == "check-out" ? "5px 0px 10px #ebebeb" : "none"};
display: flex;
flex-direction: column;
justify-content: center;
width: 12vw;
height: 62px;
border: 1px solid transparent;
border-radius: 30px;
cursor: pointer;
&:hover {
  background-color: ${(props) =>
    props.checkInOutMode == "check-out" ? "white" : "#ebebeb"};
}
}
`;
const PersonnelTextContainer = styled.div`
box-shadow: ${(props) =>
  props.isPersonnelDisplayOn ? "-5px 0 5px -5px #ebebeb" : "none"};
display: flex;
justify-content: space-between;
align-items: center;
width: 19.5vw;
height: 62px;
border: 1px solid transparent;
border-radius: 30px;
cursor: pointer;
&:hover {
  background-color: ${(props) =>
    props.isPersonnelDisplayOn ? "white" : "#ebebeb"};
}
}
`;
const PersonnelTextWrapper = styled.div`
  padding-left: 2vw;
`;
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
  height: 62px;
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
const NabarSubSearchingBtnWrapper = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

const NavbarSubComponent = ({

  searchMode,
  accommodation,
  experience,
  isSubNavbarOn,
}) => {
  const [isLocationDisplayOn, setIsLocationDisplayOn] = useState(false);
  const [isCheckInDisplayOn, setIsCheckInDisplayOn] = useState(false);
  const [isCheckOutDisplayOn, setIsCheckOutDisplayOn] = useState(false);
  const [isPersonnelDisplayOn, setIsPersonnelDisplayOn] = useState(false);
  const [guestNum, setGuestNum] = useState(0);
  const [searchedLocation, setSearchedLocation] = useState([]);
  const [typedLocation, setTypedLocation] = useState();
  const [filteredLocation, setFilteredLocation] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [rawStartDate, setRawStartDate] = useState();
  const [rawEndDate, setRawEndDate] = useState();
  const [typedWord, setTypedWord] = useState();
  const [cancelIconDisplay, setCancelIconDisplay] = useState(false);
  const [triggerInput, setTriggerInput] = useState();
  const [checkInOutMode, setCheckInOutMode] = useState();

  // TODO: convert to util function
  const splitSearchedLocation = selectedLocation
    ? selectedLocation.split(" ")
    : " ";

  // TODO: convert to util function
  const searchBtnUrl =
    "https://www.airbnb.co.kr/s/대한민국-서울-용산구/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&checkin=" +
    rawStartDate +
    "&checkout=" +
    rawEndDate +
    "&adults=" +
    guestNum +
    "&query=대한민국%20" +
    splitSearchedLocation[0] +
    "%20" +
    splitSearchedLocation[1] +
    "&place_id=ChIJ0z8xfjyifDURF7H5KqUsNKQ&source=structured_search_input_header&search_type=autocomplete_click";


  const CHECK_INOUT_FOCUSE = {
    CHECKIN: 'check-in',
    CHECKOUT: 'check-out',
  }

  function onCheckInMode() {
    setCheckInOutMode(CHECK_INOUT_FOCUSE.CHECKIN);
  }

  function changeIsLocationDisPlay(onOff) {
    setIsLocationDisplayOn(onOff);
  }
  function changeIsCheckInDisplay(onOff) {
    setIsCheckInDisplayOn(onOff);
  }
  function changeIsPersonnelDisplay(onOff) {
    setIsPersonnelDisplayOn(onOff);
  }
  function onTiriggerInput() {
    setTriggerInput("startDate");
  }

  function handleStartDate(date) {
    setRawStartDate(getRawformatDate(date));
    setStartDate(getFormatDate(date));
  }
  function handleEndDate(date) {
    setRawEndDate(getRawformatDate(date));
    if (date === "날짜 입력") {
      return;
    }
    setEndDate(getFormatDate(date));
  }
  function offLocationDisplay() {
    setIsLocationDisplayOn(false);
  }
  function onCheckInDisplay() {
    setIsCheckInDisplayOn(true);
  }

  function selecteLocation(location) {
    setSelectedLocation(location.place);
  }
  function clickLocationBtn(event) {
    setIsLocationDisplayOn(true);
    setIsCheckInDisplayOn(false);
    setIsPersonnelDisplayOn(false);
    setCheckInOutMode("");
    event.stopPropagation();
  }
  function clickCheckInBtn(event) {
    setIsLocationDisplayOn(false);
    setIsPersonnelDisplayOn(false);
    setIsCheckInDisplayOn(true);
    setIsCheckOutDisplayOn(false);
    setTriggerInput("startDate");
    setCheckInOutMode(CHECK_INOUT_FOCUSE.CHECKIN);
    event.stopPropagation();
  }
  function clickCheckOutBtn(event) {
    setIsLocationDisplayOn(false);
    setIsPersonnelDisplayOn(false);
    setTriggerInput("endDate");
    setCheckInOutMode(CHECK_INOUT_FOCUSE.CHECKOUT);
    event.stopPropagation();
  }
  function clickPesonnelBtn(event) {
    setIsLocationDisplayOn(false);
    setIsCheckInDisplayOn(false);
    setIsPersonnelDisplayOn(!isPersonnelDisplayOn);
    setCheckInOutMode("");
    event.stopPropagation();
  }
  function handleGuestNum(numOfGuest) {
    setGuestNum(numOfGuest);
  }
  function getLocationData() {
    // TODO: fix /// Promise로 바꿔보기
    _getLocationData().then((data) => {
      const locationList = data.map((eachData) => {
        return eachData;
      });
      setSearchedLocation(locationList);
    });
  }
  function filterLocation() {
    const locationList = searchedLocation.filter(location => {
      if (location.place.includes(typedLocation)) {
        return location;
      }
    });
    return locationList;
  }

  const checkLocation = () => {
    if (
      (Array.isArray(filteredLocation) && filteredLocation.length == 0) ||
      filteredLocation === undefined
    ) {
      return false;
    } else {
      return true;
    }
  };

  const checkTypedLocation = () => {
    if (typedLocation) {
      return true;
    } else {
      return false;
    }
  };

  const isLocationSearchingOn = () => {
    const isFilterdLocation = checkLocation();
    const isTypedLocation = checkTypedLocation();
    if (isFilterdLocation && isTypedLocation) {
      return true;
    } else {
      return false;
    }
  };

  const offCanCelIcon = () => {
    setCancelIconDisplay(false);
  };

  function handleLocationKeyDown(event) {
    const typedLocation = event.target.value;
    setCancelIconDisplay(typedLocation ? true : false);
    getLocationData();
    setTypedLocation(typedLocation);
    setFilteredLocation(filterLocation());

    changeIsLocationDisPlay(isLocationSearchingOn());
  }
  function handleOnModifyMode() {
    setSelectedLocation();
  }
  const handleClickCancelBtn = () => {
    setCancelIconDisplay(false);
    setSelectedLocation("");
    setTypedLocation("");
  };

  function onCheckOutMode() {
    if(startDate && isCheckInDisplayOn) {setCheckInOutMode("check-out")}
  }

  useEffect(() => {
    onCheckOutMode();
  })

  return (
    <NavbarSubBg isSubNavbarOn={isSubNavbarOn}>
      <div>
        <ForAccommodationBg >
          <ForAccommodationTextsWrapper>
            <LocationTextContainer
              isLocationDisplayOn={isLocationDisplayOn}
              onClick={clickLocationBtn}
              experience={experience}
            >
              <div>
                <NavbarSubText padding>위치</NavbarSubText>
                <NavbarLocationInput
                  onClick={handleOnModifyMode}
                  onKeyUp={handleLocationKeyDown}
                  type="text"
                  placeholder={"어디로 여행가세요?"}
                  value={selectedLocation}
                ></NavbarLocationInput>
              </div>
              <TimesIconContainer cancelIconDisplay={cancelIconDisplay}>
                <TimesIconWrapper onClick={handleClickCancelBtn}>
                  <FontAwesomeIcon icon={["fas", "times"]} size="1x" />
                </TimesIconWrapper>
              </TimesIconContainer>
            </LocationTextContainer>
            <NavbarSubTextsContainer accommodation={accommodation}>
              <NavbarSubTextsWrapper>
                <CheckInTextContainer
                  checkInOutMode={checkInOutMode}
                  isCheckInDisplayOn={isCheckInDisplayOn}
                  onClick={clickCheckInBtn}
                >
                  <NavbarSubText padding>체크인</NavbarSubText>
                  <NavbarSubUnderText padding>
                    {startDate || "날짜 입력"}
                  </NavbarSubUnderText>
                </CheckInTextContainer>
                <CheckOutTextContainer
                checkInOutMode={checkInOutMode}
                  isCheckOutDisplayOn={isCheckOutDisplayOn}
                  onClick={clickCheckOutBtn}
                >
                  <NavbarSubText padding>체크아웃</NavbarSubText>
                  <NavbarSubUnderText padding>
                    {endDate || "날짜 입력"}
                  </NavbarSubUnderText>
                </CheckOutTextContainer>
                <PersonnelTextContainer
                  isPersonnelDisplayOn={isPersonnelDisplayOn}
                  onClick={clickPesonnelBtn}
                >
                  <PersonnelTextWrapper>
                    <NavbarSubText>인원</NavbarSubText>
                    <NavbarSubUnderText>
                      {guestNum == 0
                        ? "게스트 추가"
                        : "게스트 " + guestNum + " 명"}
                    </NavbarSubUnderText>
                  </PersonnelTextWrapper>
                  <NavbarSearchBtnWrapper href={searchBtnUrl}>
                    <NavbarSearchIconLabel>
                      <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
                    </NavbarSearchIconLabel>
                  </NavbarSearchBtnWrapper>
                </PersonnelTextContainer>
              </NavbarSubTextsWrapper>
            </NavbarSubTextsContainer>
            <NavbarSubTextsContainer2
              onClick={clickCheckInBtn}
              experience={experience}
            >
              <NavbarSubTextsWrapper2>
                <div>
                  <NavbarSubText padding>날짜</NavbarSubText>
                  <NavbarSubUnderText padding>
                    {endDate
                      ? startDate + "-" + endDate
                      : "원하는 날짜를 입력하세요."}
                  </NavbarSubUnderText>
                </div>
                <NabarSubSearchingBtnWrapper
                >
                  <NavbarSearchIconLabel position>
                    <FontAwesomeIcon icon={["fas", "search"]} size="1x" />
                  </NavbarSearchIconLabel>
                </NabarSubSearchingBtnWrapper>
              </NavbarSubTextsWrapper2>
            </NavbarSubTextsContainer2>
          </ForAccommodationTextsWrapper>
        </ForAccommodationBg>
      </div>
      <SearchingNavbar
        onCheckInMode={onCheckInMode}
        onTiriggerInput={onTiriggerInput}
        triggerInput={triggerInput}
        offCanCelIcon={offCanCelIcon}
        changeIsCheckInDisplay={changeIsCheckInDisplay}
        changeIsPersonnelDisplay={changeIsPersonnelDisplay}
        changeIsLocationDisPlay={changeIsLocationDisPlay}
        onCheckInDisplay={onCheckInDisplay}
        offLocationDisplay={offLocationDisplay}
        handleStartDate={handleStartDate}
        handleEndDate={handleEndDate}
        typedLocation={typedLocation}
        filteredLocation={filteredLocation}
        handleGuestNum={handleGuestNum}
        isLocationDisplayOn={isLocationDisplayOn}
        isCheckInDisplayOn={isCheckInDisplayOn}
        isCheckOutDisplayOn={isCheckOutDisplayOn}
        isPersonnelDisplayOn={isPersonnelDisplayOn}
        selecteLocation={selecteLocation}
      />
    </NavbarSubBg>
  );
};

export default NavbarSubComponent;
