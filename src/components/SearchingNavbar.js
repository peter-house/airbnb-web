import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useState } from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import style from "./react_dates_overrides.css";
import moment from "moment";
import "moment/locale/ko";

const SearchingNavbarBg = styled.div``;
const LocationSearching = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  position: absolute;
  top: 155px;
  left: 320px;
  background-color: white;
  width: 500px;
  height: 400px;
  border-radius: 13px;
`;
const CheckInOutSearching = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  position: absolute;
  top: 155px;
  left: 320px;
  background-color: white;
  width: 59vw;
  height: 400px;
  border-radius: 13px;
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
  border-radius: 13px;
`;
const Person = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const Age = styled.div`
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
const SearchingNavbar = (props) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();
  const [personnelAdultlNum, setPersonnelAdultlNum] = useState(0);
  const [personnelChildlNum, setPersonnelChildlNum] = useState(0);
  const [personnelBabylNum, setPersonnelBabyNum] = useState(0);
  const [personnelNum, setPersonnelNum] = useState(0);
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
  useEffect(() => {
    setPersonnelNum(personnelAdultlNum + personnelChildlNum);
    props.handleGuestNum(personnelNum);
  });

  return (
    <SearchingNavbarBg>
      <LocationSearching display={props.isLocationDisplayOn}>
        {" "}
        Location
      </LocationSearching>
      <CheckInOutSearching display={props.isChechInOutDisplayOn}>
        <DateRangePicker
          startDate={startDate}
          startDateId="start-date"
          endDate={endDate}
          endDateId="end-date"
          onDatesChange={({ startDate, endDate }) => {
            setStartDate(startDate);
            setEndDate(endDate);
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        />
      </CheckInOutSearching>
      <PersonnelSearching display={props.isPersonnelDisplayOn}>
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
