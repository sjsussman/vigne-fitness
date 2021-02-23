import React, { useState } from "react";
import NavigationLinks from "./NavigationLinks";
import Logo from "../../images/Logo.jpg";

const NavigationBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav classname="navigation">
      <img src={Logo} />
      <div
        className="toggle"
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <div className="hamburger" open /> : <div />}
      </div>
      {navbarOpen ? (
        <div className="navbox">
          <NavigationLinks />
        </div>
      ) : (
        <div classname="navbox" open>
          <NavigationLinks />
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
