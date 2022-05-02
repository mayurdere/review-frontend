import React from "react";
import { useEffect } from "react";
import AppContext from "../../context/AppContext";
import "./DarkMode.scss";

const DarkMode = (props) => {
  const { currentTheme } = React.useContext(AppContext);
  const [currentThemeValue, setCurrentThemeValue] = currentTheme;
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  useEffect(() => {
    console.log(currentThemeValue, 'currentThemeValue')
  })

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
      console.log(localStorage.getItem('theme'));
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      setCurrentThemeValue("light")
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      setCurrentThemeValue("dark")
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >Dark Mode</button>
  );
};

export default DarkMode;
