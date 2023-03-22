// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file
import React from "react";
import "./Header.css";
import CTA from './CTA.jsx' // 7.0 import the CTA component and use it 
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* // 5.0 wrap the component with header tag. Type: .container.header__container, and press tab to create a div with this class naming convention*/}
        {/* // 5.0 This naming convention is called bim, for css classes*/}
        <h5>Hi I'm</h5>
        <h1>Yabel Rodriguez</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        {/* // 7.1 use a profile image imported from assets folder  */}
        <div className="me">
          <img src='' alt="" />
        </div>

        {/* // 7.2 anchor link to scroll down the page  */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;
