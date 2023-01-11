import React from "react";
import HailofFame from "./ApiOpencritic";
import Banner from "./Banner";
// import Cart from "./Cart";
import GamesToShow from "./GamesToShow";

function MyApp() {
  return (
        <div>
          <Banner />
          {/* <Cart /> */}
          {/* <GamesToShow /> */}
          <HailofFame />
        </div>
          );
}


export default MyApp;