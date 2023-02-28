import React from "react";
import HailofFame from "./ApiOpencritic";
import Banner from "./Banner";
import YearButton from "./DropDownYears";
// import Cart from "./Cart";
// import GamesToShow from "./GamesToShow";

function MyApp() {
  return (
        <div>
          <Banner />
          <YearButton />
          <HailofFame />
        </div>
          );
}


export default MyApp;