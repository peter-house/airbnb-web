import React from "react";
import Banner from "./components/Banner";
import NearPlace from "./components/NearPlace";
import Wherever from "./components/Wherever";
import Hosting from "./components/Hosting";
import SpecialWay from "./components/SpecialWay";
import BottomMenu from "./components/BottomMenu";
import NavBar from "./components/NavBar/NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import style from "./style.css";

library.add(fab, fas);

const App = () => {
  const [bannerRef, setBannerRef] = useState();

  function getBannerBgRef(bannerBgRef) {
    setBannerRef(bannerBgRef.current);
  }
  return (
    <>
      <NavBar bannerRef={bannerRef} />
      <Banner getBannerBgRef={getBannerBgRef} />
      <NearPlace />
      <Wherever />
      <Hosting />
      <SpecialWay />
      <BottomMenu />
    </>
  );
};
export default App;
