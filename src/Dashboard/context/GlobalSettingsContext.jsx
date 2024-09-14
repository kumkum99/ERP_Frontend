import React, { createContext, useState } from "react";

export const GlobalSettingsContext = createContext();

export const GlobalSettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState("16px");
  const [fontColor, setFontColor] = useState("#000000");
  const [sidebarBgColor, setSidebarBgColor] = useState("#092542");
  const [navbarBgColor, setNavbarBgColor] = useState('#092542'); // Default color

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const changeFontSize = (value) => setFontSize(value);
  const changeFontColor = (value) => setFontColor(value);
  const changeSidebarBgColor = (value) => setSidebarBgColor(value);
  const changeNavbarBgColor = (color) => setNavbarBgColor(color);
  

  return (
    <GlobalSettingsContext.Provider
      value={{
        darkMode,
        fontSize,
        fontColor,
        sidebarBgColor,
        toggleDarkMode,
        changeFontSize,
        changeFontColor,
        changeSidebarBgColor,
        navbarBgColor,
        changeNavbarBgColor,
      }}
    >
      {children}
    </GlobalSettingsContext.Provider>
  );
};
