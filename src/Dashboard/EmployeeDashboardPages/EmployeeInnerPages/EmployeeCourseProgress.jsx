import React, { useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";
import { useCourses } from '../../context/CourseContext';
import { Col, Card } from 'react-bootstrap';
import { FaBookOpen } from 'react-icons/fa';

const EmployeeCourseProgress = () => {
  const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const { courses } = useCourses();

  // Find the most recent course based on completion date
  const latestCourse = courses.reduce((latest, course) => {
    if (course.completionDate && (!latest.completionDate || new Date(course.completionDate) > new Date(latest.completionDate))) {
      return course;
    }
    return latest;
  }, {});

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
        <div id="employeeCourseProgressContainer">
          <h1 id="employeeCourseProgressHeading">Employee Course Progress</h1>
          
          {/* Latest Course Progress Card */}
          <Col md={3} sm={6} className="mb-4">
            <Card className="text-center card-width card-alert">
              <Card.Body className="dashCard">
                <FaBookOpen size={40} />
                <Card.Title className='mainCardText'>Latest Course</Card.Title>
                <Card.Text className='CardTitle'>
                  {latestCourse.courseName || 'No Course Progressed'}<br />
                  {latestCourse.progress === 'Completed' ? 'Completed' : 'In Progress'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Course Progress Table */}
          <table id="employeeCourseProgressTable">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Status</th>
                <th>Completion Date</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.courseName}</td>
                  <td>
                    <span
                      className={
                        course.progress === 'Completed'
                          ? 'courseStatusCompleted'
                          : 'courseStatusInProgress'
                      }
                    >
                      {course.progress}
                    </span>
                  </td>
                  <td>{course.completionDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCourseProgress;
