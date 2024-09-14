import React from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'
const EmployeeCourseProgress = () => {
  // Example data: You can replace this with dynamic data from your backend
  const courses = [
    {
      courseName: 'JavaScript Essentials',
      progress: 'Completed',
      completionDate: '2023-08-15',
    },
    {
      courseName: 'React JS Fundamentals',
      progress: 'In Progress',
      completionDate: 'N/A',
    },
    {
      courseName: 'Python for Data Science',
      progress: 'Completed',
      completionDate: '2023-07-25',
    },
    {
      courseName: 'DevOps Fundamentals',
      progress: 'In Progress',
      completionDate: 'N/A',
    },
  ];

  return (
    <div className="d-flex flex-column">
    <NavbarComponent /> 
    <div className="d-flex flex-grow-1">
      <EmpSidebar />
    <div id="employeeCourseProgressContainer">
      <h1 id="employeeCourseProgressHeading">Employee Course Progress</h1>

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
