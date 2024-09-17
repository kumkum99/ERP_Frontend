import React, { useContext } from "react";
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";
import './PagesCss.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../AdminSidebar'

const SettingPage = () => {
    const {
        darkMode,
        toggleDarkMode,
        fontSize,
        changeFontSize,
        fontColor,
        changeFontColor,
        sidebarBgColor,
        changeSidebarBgColor,
        navbarBgColor,
        changeNavbarBgColor, // Add navbar background color handler
      } = useContext(GlobalSettingsContext);
      
      return (
        <div className="d-flex flex-column">
          <NavbarComponent bgColor={navbarBgColor} /> {/* Pass the navbar color */}
          <div className="d-flex flex-grow-1">
            <Sidebar />
            <div id="settingsPageContainer">
              <h2 id="settingsHeading">Dashboard Settings</h2>
      
              <div id="settingsOptions">
                {/* Theme Settings */}
                <div id="themeSettings">
                  <h3 id="themeHeading">Theme Settings</h3>
                  <label htmlFor="darkModeToggle">
                    <input
                      type="checkbox"
                      id="darkModeToggle"
                      checked={darkMode}
                      onChange={toggleDarkMode}
                    />
                    Dark Mode
                  </label>
                </div>
      
                {/* Font Settings */}
                <div id="fontSettings">
                  <h3 id="fontHeading">Font Settings</h3>
                  <label htmlFor="fontSizeInput">Font Size</label>
                  <input
                    type="range"
                    id="fontSizeInput"
                    min="14"
                    max="22"
                    value={parseInt(fontSize)}
                    onChange={(e) => changeFontSize(e.target.value)}
                  />
                  <span id="fontSizeValue">{fontSize}</span>
      
                  <label htmlFor="fontColorInput">Font Color</label>
                  <input
                    type="color"
                    id="fontColorInput"
                    value={fontColor}
                    onChange={(e) => changeFontColor(e.target.value)}
                  />
                </div>
      
                {/* Sidebar Settings */}
                <div id="sidebarSettings">
                  <h3 id="sidebarHeading">Sidebar Settings</h3>
                  <label htmlFor="sidebarBgColorInput">Sidebar Background Color</label>
                  <input
                    type="color"
                    id="sidebarBgColorInput"
                    value={sidebarBgColor}
                    onChange={(e) => changeSidebarBgColor(e.target.value)}
                  />
                </div>
      
                {/* Navbar Settings */}
                <div id="navbarSettings">
                  <h3 id="navbarHeading">Navbar Settings</h3>
                  <label htmlFor="navbarBgColorInput">Navbar Background Color</label>
                  <input
                    type="color"
                    id="navbarBgColorInput"
                    value={navbarBgColor}
                    onChange={(e) => changeNavbarBgColor(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default SettingPage;
