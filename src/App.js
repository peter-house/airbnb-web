import React from "react";
import Banner from "./components/Banner";
import NearPlace from "./components/NearPlace";
import Wherever from "./components/Wherever";
import Hosting from "./components/Hosting";
import SpecialWay from "./components/SpecialWay";
import BottomMenu from "./components/BottomMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const App = () => {
  return (
    <div>
      <Banner />
      <NearPlace />
      <Wherever />
      <Hosting />
      <SpecialWay />
      <BottomMenu />
    </div>
  );
};
export default App;
