import React, { useState, useEffect, useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const WorkDeadline = () => {
  const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const [deadlines, setDeadlines] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [deadlineDate, setDeadlineDate] = useState('');

  useEffect(() => {
    loadDeadlines();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveDeadline(taskName, deadlineDate);
    renderDeadline(taskName, deadlineDate);
    setTaskName('');
    setDeadlineDate('');
  };

  const renderDeadline = (taskName, deadlineDate) => {
    const newDeadline = { taskName, deadlineDate, status: checkDeadlineStatus(deadlineDate) };
    setDeadlines([...deadlines, newDeadline]);
  };

  const checkDeadlineStatus = (deadlineDate) => {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    return deadline < today ? 'Overdue' : 'On Track';
  };

  const saveDeadline = (taskName, deadlineDate) => {
    const storedDeadlines = JSON.parse(localStorage.getItem('deadlines')) || [];
    const newDeadline = { taskName, deadlineDate };
    localStorage.setItem('deadlines', JSON.stringify([...storedDeadlines, newDeadline]));
  };

  const loadDeadlines = () => {
    const storedDeadlines = JSON.parse(localStorage.getItem('deadlines')) || [];
    const updatedDeadlines = storedDeadlines.map((deadline) => ({
      ...deadline,
      status: checkDeadlineStatus(deadline.deadlineDate),
    }));
    setDeadlines(updatedDeadlines);
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
        <section id="workDead-container" className="workDead-container">
          <h1 id="workDead-heading">Work Deadline Management</h1>

          <form id="workDead-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="workTaskName-input"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Task Name"
              required
            />
            <input
              type="date"
              id="workDeadlineDate-input"
              value={deadlineDate}
              onChange={(e) => setDeadlineDate(e.target.value)}
              required
            />
            <button type="submit" id="workAddDeadlineButton">Add Deadline</button>
          </form>

          <h2 id="workDeadlines-heading">Deadlines</h2>

          <table id="workDead-table">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Deadline</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {deadlines.map((deadline, index) => (
                <tr key={index}>
                  <td>{deadline.taskName}</td>
                  <td>{deadline.deadlineDate}</td>
                  <td>{deadline.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default WorkDeadline;
