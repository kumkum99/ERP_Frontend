import React, { useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";
import { useCourses } from '../../context/CourseContext';

const CourseMaterial = () => {
  const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const { updateCourseProgress } = useCourses();

  const handleStartCourse = (courseName) => {
    updateCourseProgress(courseName, 'In Progress', 'N/A');
  };

  const handleCompleteCourse = (courseName) => {
    updateCourseProgress(courseName, 'Completed', new Date().toISOString().split('T')[0]);
  };

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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>JavaScript Essentials</td>
                  <td>Introduction to JavaScript for web development.</td>
                  <td>4 Weeks</td>
                  <td><a href="https://www.w3schools.com/js/">View Course</a></td>
                  <td>
                    <button onClick={() => handleStartCourse('JavaScript Essentials')}>Start</button><br />
                    <button onClick={() => handleCompleteCourse('JavaScript Essentials')}>Complete</button>
                  </td>
                </tr>
                <tr>
    <td>HTML & CSS Basics</td>
    <td>Learn the foundation of web development with HTML and CSS.</td>
    <td>3 Weeks</td>
    <td><a href="https://www.w3schools.com/html/">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('HTML & CSS Basics')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('HTML & CSS Basics')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>Java Programming</td>
    <td>Introduction to Java for web development.</td>
    <td>4 Weeks</td>
    <td><a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('Java Programming')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('Java Programming')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>React JS Fundamentals</td>
    <td>Master the basics of React for building modern web applications.</td>
    <td>5 Weeks</td>
    <td><a href="https://reactjs.org/docs/getting-started.html">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('React JS Fundamentals')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('React JS Fundamentals')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>Spring Boot Introduction</td>
    <td>Learn the basics of Spring Boot for Java applications.</td>
    <td>4 Weeks</td>
    <td><a href="https://spring.io/projects/spring-boot">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('Spring Boot Introduction')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('Spring Boot Introduction')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>Bootstrap Basics</td>
    <td>Get started with responsive design using Bootstrap.</td>
    <td>3 Weeks</td>
    <td><a href="https://getbootstrap.com/docs/5.1/getting-started/introduction/">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('Bootstrap Basics')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('Bootstrap Basics')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>SQL Basics</td>
    <td>Learn how to query databases using SQL.</td>
    <td>4 Weeks</td>
    <td><a href="https://www.w3schools.com/sql/">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('SQL Basics')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('SQL Basics')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>MongoDB Basics</td>
    <td>Introduction to NoSQL databases with MongoDB.</td>
    <td>4 Weeks</td>
    <td><a href="https://www.mongodb.com/try/download/community">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('MongoDB Basics')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('MongoDB Basics')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>Cloud Computing Basics</td>
    <td>Introduction to cloud computing concepts and platforms.</td>
    <td>5 Weeks</td>
    <td><a href="https://aws.amazon.com/training/intro_series/">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('Cloud Computing Basics')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('Cloud Computing Basics')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>Networking Fundamentals</td>
    <td>Learn the basics of networking and protocols.</td>
    <td>4 Weeks</td>
    <td><a href="https://www.coursera.org/learn/computer-networking">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('Networking Fundamentals')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('Networking Fundamentals')}>Complete</button>
    </td>
  </tr>
  <tr>
    <td>Design Thinking</td>
    <td>Introduction to design thinking and problem-solving.</td>
    <td>3 Weeks</td>
    <td><a href="https://www.ideou.com/pages/design-thinking">View Course</a></td>
    <td>
      <button onClick={() => handleStartCourse('Design Thinking')}>Start</button><br />
      <button onClick={() => handleCompleteCourse('Design Thinking')}>Complete</button>
    </td>
  </tr>
                {/* Other courses similar to the above */}
              </tbody>
            </table>
          </div>
          {/* Other sections similar to the above */}
        </div>
      </div>
    </div>
  );
};

export default CourseMaterial;
