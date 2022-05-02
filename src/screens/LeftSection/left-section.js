import React from 'react';
import AppContext from '../../context/AppContext';
import './left-section.scss'

const LeftSection = () => {
  const { name, email, currentTheme } = React.useContext(AppContext);
 const [nameValue, setnameValue] = name;
 const [emailValue, setemailValue] = email;
 const [currentThemeValue, setcurrentThemeValue] = currentTheme;
  const theme = localStorage.getItem("theme");
  return <div className="container-left-section">
    <div className="menus">
      <div className="menu-text">Home</div>
    </div>
    <div className="menus">
      <div className="menu-text">Traverse</div>
    </div>
    <div className="menus">
      <div className="menu-text">Products</div>
    </div>
    <div className="menus">
      <div className="menu-text">Complaints</div>
    </div>
    <div className="menus">
      <div className="menu-text">Categories</div>
    </div>
    <div className="menus">
      <div className="menu-text">Outrage</div>
    </div>
    <div className="menus">
      <div className="menu-text">Community</div>
    </div>
  </div>;
};

export default LeftSection;
