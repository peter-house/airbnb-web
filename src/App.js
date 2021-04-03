import React from "react";
import Banner from "./components/Banner";
import NearPlace from "./components/NearPlace";
import Wherever from "./components/Wherever";
import Hosting from "./components/Hosting";
import SpecialWay from "./components/SpecialWay";
import BottomMenu from "./components/BottomMenu";
import NavBar from "./components/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { useState } from "react";
import style from "./components/react_dates_overrides.css";

library.add(fab, fas);

const App = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState();

  return (
    <div>
      <NavBar />
      <Banner />
      <NearPlace />
      <Wherever />
      <Hosting />
      <SpecialWay />
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
      <BottomMenu />
    </div>
  );
};
export default App;
