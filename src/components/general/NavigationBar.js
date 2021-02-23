import React from "react";
import NavigationLinks from "./NavigationLinks";
import Logo from "../../images/Logo.jpg";
import "../../styles/styles.scss";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <img id="logo" src={Logo} alt="vigne logo" />
      <div className="navbox">
        <NavigationLinks />
      </div>
    </nav>
  );
};

export default NavigationBar;
