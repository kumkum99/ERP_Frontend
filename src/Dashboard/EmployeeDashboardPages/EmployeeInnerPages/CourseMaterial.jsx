import React, {useContext } from  'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const CourseMaterial = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  return (
    <div className="d-flex flex-column"
    id="homePageContainer"
    style={{
      backgroundColor: darkMode ? "#1e1e1e" : "#f0f0f0",
      color: fontColor,
      fontSize: fontSize,
    }}>
    <NavbarComponent /> 
    <div className="d-flex flex-grow-1">
      <EmpSidebar />
    <div id="courseMaterialContainer">
      <h1 id="courseMaterialHeading">IT Sector Course Material</h1>

      {/* Programming Section */}
      <div id="programmingSection">
        <h2 id="programmingHeading">Programming</h2>
        <table id="programmingTable">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JavaScript Essentials</td>
              <td>Introduction to JavaScript for web development.</td>
              <td>4 Weeks</td>
              <td><a id="jsEssentialsLink" href="https://www.w3schools.com/js/">View Course</a></td>
            </tr>
            <tr>
              <td>Java</td>
              <td>Introduction to Java for web development.</td>
              <td>4 Weeks</td>
              <td><a id="jsEssentialsLink" href="https://www.w3schools.com/java/default.asp">View Course</a></td>
            </tr>
            <tr>
              <td>Python for Data Science</td>
              <td>Learn Python with a focus on data analysis.</td>
              <td>6 Weeks</td>
              <td><a id="pythonDataScienceLink" href="https://www.w3schools.com/python/default.asp">View Course</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Web Development Section */}
      <div id="webDevSection">
        <h2 id="webDevHeading">Web Development</h2>
        <table id="webDevTable">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HTML & CSS Basics</td>
              <td>Learn the foundation of web development with HTML and CSS.</td>
              <td>3 Weeks</td>
              <td><a id="htmlCssBasicsLink" href="https://www.w3schools.com/html/default.asp">View Course</a></td>
            </tr>
            <tr>
              <td>React JS Fundamentals</td>
              <td>Master the basics of React for building modern web applications.</td>
              <td>5 Weeks</td>
              <td><a id="reactJsFundamentalsLink" href="https://www.w3schools.com/react/default.asp">View Course</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Database Section */}
      <div id="databaseSection">
        <h2 id="databaseHeading">Databases</h2>
        <table id="databaseTable">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SQL Basics</td>
              <td>Learn how to query databases using SQL.</td>
              <td>4 Weeks</td>
              <td><a id="sqlBasicsLink" href="https://www.w3schools.com/mysql/default.asp">View Course</a></td>
            </tr>
            <tr>
              <td>NoSQL Essentials</td>
              <td>Introduction to NoSQL databases like MongoDB.</td>
              <td>3 Weeks</td>
              <td><a id="noSqlEssentialsLink" href="https://www.w3schools.com/mongodb/index.php">View Course</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Software Engineering Section */}
      <div id="softwareEngSection">
        <h2 id="softwareEngHeading">Software Engineering</h2>
        <table id="softwareEngTable">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agile Development</td>
              <td>Learn Agile methodologies for software development.</td>
              <td>6 Weeks</td>
              <td><a id="agileDevelopmentLink" href="https://www.atlassian.com/agile">View Course</a></td>
            </tr>
            <tr>
              <td>DevOps Fundamentals</td>
              <td>Master the basics of DevOps for faster software delivery.</td>
              <td>5 Weeks</td>
              <td><a id="devOpsFundamentalsLink" href="https://devoops.ru/en/">View Course</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default CourseMaterial;
