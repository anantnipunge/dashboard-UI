import React from "react";
import "./hero.css";
import LeftSidebar from "./LeftSidebar";
import Main from "./Main";
import RightSidebar from "./RightSidebar";

function Hero() {
  return (
    <>
      <div className="hero">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </>
  );
}

export default Hero;
