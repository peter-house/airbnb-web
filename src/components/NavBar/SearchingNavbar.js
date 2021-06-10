

import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import style from "../react_dates_overrides.css";
import moment from "moment";
import "moment/locale/ko";

const SearchingNavbarBg = styled.div`
`;
const LocationSearching = styled.div`
  padding: 15px 15px;
  display: ${(props) => (props.isLocationDisplayOn ? "block" : "none")};
  overflow: hidden;
  position: absolute;
  top: 155px;
  left: 20vw;
  background-color: white;
  width: 400px;
  height: auto;
  max-height: 300px;
  border-radius: 40px;
  z-index: 100;

`;
const LocationText = styled.div``;
const LocationContentWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const MapIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 47px;
  height: 47px;
  background-color: #ebebeb;
  border: ${(props) => (props.border ? "1px solid #c1c1c" : "none")};
  border-radius: 10px;
  margin-right: 20px;
`;
const CheckInOutSearching = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  position: absolute;
  top: 155px;
  left: 40vw;
  background-color: white;
  width: 20vw;
  height: 15vw;
  border-radius: 40px;
`;
const PersonnelSearching = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  position: absolute;
  top: 155px;
  right: 20vw;
  background-color: white;
  width: 330px;
  height: 230px;
  color: black;
  border-radius: 40px;
`;
const Person = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const Age = styled.div`
  color: #717171;
  font-size: 14px;
  font-weight: 400;
`;
const PersonnelListContainer = styled.div`
  padding: 16px 32px;
`;
const PersonnelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;
const PersonnelNumWrapper = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PlusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(113, 113, 113);
  border-radius: 50px;
  width: 30px;
  height: 30px;
  color: rgb(113, 113, 113);
  font-size: 20px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
const MinusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(113, 113, 113);
  border-radius: 50px;
  width: 30px;
  height: 30px;
  color: rgb(113, 113, 113);
  font-size: 20px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;
const PersonnelLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(235, 235, 235);
`;
const LocationIconImg = styled.img`
  width: 47px;
  height: 47px;
`;
const SearchingNavbar = ({
  changeIsCheckInOutDisplay,
  changeIsPersonnelDisplay,
  changeIsLocationDisPlay,
  onChechInOutDisplay,
  offLocationDisplay,
  handleStartDate,
  handleEndDate,
  typedLocation,
  filteredLocation,
  handleGuestNum,
  isLocationDisplayOn,
  isChechInOutDisplayOn,
  isPersonnelDisplayOn,
  selecteLocation,
  offCancelIcon,
}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();
  const [personnelAdultlNum, setPersonnelAdultlNum] = useState(0);
  const [personnelChildlNum, setPersonnelChildlNum] = useState(0);
  const [personnelBabylNum, setPersonnelBabyNum] = useState(0);
  const [personnelNum, setPersonnelNum] = useState(0);
  const locationPageRef = useRef();
  const checkInOutPageRef = useRef();
  const personnelPlageRef = useRef();
  moment.locale("ko");

  function handleClickPlusBtn(years) {
    switch (years) {
      case "adult":
        setPersonnelAdultlNum(personnelAdultlNum + 1);
        break;
      case "child":
        setPersonnelChildlNum(personnelChildlNum + 1);
        break;
      case "baby":
        setPersonnelBabyNum(personnelBabylNum + 1);
        break;
    }
  }
  function handleClickMinusBtn(years) {
    switch (years) {
      case "adult":
        setPersonnelAdultlNum(personnelAdultlNum - 1);
        break;
      case "child":
        setPersonnelChildlNum(personnelChildlNum - 1);
        break;
      case "baby":
        setPersonnelBabyNum(personnelBabylNum - 1);
        break;
    }
  }
  function handleClickLocation(event,location) {
    console.log('this is location !!', location);
    let selectedPlace = location.place;

    selecteLocation(selectedPlace);
    offLocationDisplay();
    onChechInOutDisplay();
    offCancelIcon();

    event.stopPropagation();
  }
  function handleClickOutsideLocation({ target }) {
    if (locationPageRef.current.contains(target)) {
      changeIsLocationDisPlay(false);
    } else {
      changeIsLocationDisPlay(false);
    }
  }
  function handleClickOutsideCheckInOut({ target }) {
    if (checkInOutPageRef.current.contains(target)) {
      changeIsCheckInOutDisplay(true);
      return true;
    } else {
      changeIsCheckInOutDisplay(false);
      return false;
    }
  }
  function handleClickOutsidePersonnel({ target }) {
    if (personnelPlageRef.current.contains(target)) {
      changeIsPersonnelDisplay(true);
      return true;
    } else {
      changeIsPersonnelDisplay(false);
      return false;
    }
  }
  function handleClickOutside(target) {
    handleClickOutsideLocation(target);
    handleClickOutsideCheckInOut(target);
    handleClickOutsidePersonnel(target);
  }
  
  const handleGlobalClick = () => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  };

  useEffect(() => {
    handleGlobalClick();
    setPersonnelNum(personnelAdultlNum + personnelChildlNum);
    handleGuestNum(personnelNum);
    // setInterval(() => {
    //   console.log("startdata", focusedInput);
    // }, 1000);
  });
  return (
    <SearchingNavbarBg>
      <LocationSearching typedLocation={typedLocation} filteredLocation={filteredLocation} isLocationDisplayOn={isLocationDisplayOn} ref={locationPageRef}>
        {typedLocation ? (
          filteredLocation.map((location) => {
            return (
              <LocationContentWrapper key={location.id} onClick={() => handleClickLocation(event,location)}>
                <MapIconWrapper>
                  <FontAwesomeIcon icon={["fas", "map-marker-alt"]} size="1x" />
                </MapIconWrapper>
                <LocationText>{location.place}</LocationText>
              </LocationContentWrapper>
            );
          })
        ) : (
          <LocationContentWrapper>
            <MapIconWrapper border>
              <LocationIconImg src="https://a0.muscache.com/im/pictures/fc42dde0-36a7-460e-af89-10b5e44e48d8.jpg?im_w=240&im_q=lowq"></LocationIconImg>
            </MapIconWrapper>
            <LocationText>가까운 여행지 둘러보기 </LocationText>
          </LocationContentWrapper>
        )}
      </LocationSearching>
      <CheckInOutSearching
        display={isChechInOutDisplayOn}
        ref={checkInOutPageRef}
      >
        <DateRangePicker
          keepOpenOnDateSelect={true}
          displayFormat={() => "M월 D일"}
          startDatePlaceholderText={"날짜입력"}
          endDatePlaceholderText={"날짜입력"}
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
            handleStartDate(startDate._d || "날짜 입력");
            handleEndDate(endDate ? endDate._d : "날짜 입력");
          }}
          onFocusChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
            handleStartDate(startDate._d || "날짜 입력");
            handleEndDate(endDate ? endDate._d : "날짜 입력");
          }}
          endDateId="end-date"
          focusedInput={focusedInput || "startDate"}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        />
      </CheckInOutSearching>
      <PersonnelSearching
        display={isPersonnelDisplayOn}
        ref={personnelPlageRef}
      >
        <PersonnelListContainer>
          <PersonnelWrapper>
            <div>
              <Person>성인</Person>
              <Age>만 13세 이상</Age>
            </div>
            <PersonnelNumWrapper>
              <MinusBtn
                onClick={() => {
                  handleClickMinusBtn("adult");
                }}
              >
                -
              </MinusBtn>
              <div>{personnelAdultlNum}</div>
              <PlusBtn
                onClick={() => {
                  handleClickPlusBtn("adult");
                }}
              >
                +
              </PlusBtn>
            </PersonnelNumWrapper>
          </PersonnelWrapper>
          <PersonnelLine></PersonnelLine>
          <PersonnelWrapper>
            <div>
              <Person>어린이</Person>
              <Age>만 2~12세</Age>
            </div>
            <PersonnelNumWrapper>
              <MinusBtn
                onClick={() => {
                  handleClickMinusBtn("child");
                }}
              >
                -
              </MinusBtn>
              <div>{personnelChildlNum}</div>
              <PlusBtn
                onClick={() => {
                  handleClickPlusBtn("child");
                }}
              >
                +
              </PlusBtn>
            </PersonnelNumWrapper>
          </PersonnelWrapper>
          <PersonnelLine></PersonnelLine>
          <PersonnelWrapper>
            <div>
              <Person>유아</Person>
              <Age>만 2세 미만</Age>
            </div>
            <PersonnelNumWrapper>
              <MinusBtn
                onClick={() => {
                  handleClickMinusBtn("baby");
                }}
              >
                -
              </MinusBtn>
              <div>{personnelBabylNum}</div>
              <PlusBtn
                onClick={() => {
                  handleClickPlusBtn("baby");
                }}
              >
                +
              </PlusBtn>
            </PersonnelNumWrapper>
          </PersonnelWrapper>
        </PersonnelListContainer>
      </PersonnelSearching>
    </SearchingNavbarBg>
  );
};

export default SearchingNavbar;
