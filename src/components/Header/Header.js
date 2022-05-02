import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import './Header.scss'

const Header = () => {
    const myFunction = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  return (
    <div>
      <div class="topnav" id="myTopnav">
        <a href="#home" class="active">
        Home
        </a>
        <a href="#contact">Logout</a>
        <DarkMode/>
        <a href="javascript:void(0);" class="icon" onClick={myFunction}>
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
};

export default Header;
