import React, { useState, useEffect, useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const EmployeeProgress = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [taskProgress, setTaskProgress] = useState('');

  const [workProgress, setWorkProgress] = useState(0);
  const [skillsProgress, setSkillsProgress] = useState(0);
  const [experience, setExperience] = useState(0);
  const [salaryIncrement, setSalaryIncrement] = useState(0);

  // Load data from localStorage when component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('employeeTasks')) || [];
    setTasks(savedTasks);

    const savedWorkProgress = JSON.parse(localStorage.getItem('workProgress')) || 0;
    setWorkProgress(savedWorkProgress);

    const savedSkillsProgress = JSON.parse(localStorage.getItem('skillsProgress')) || 0;
    setSkillsProgress(savedSkillsProgress);

    const savedExperience = JSON.parse(localStorage.getItem('experience')) || 0;
    setExperience(savedExperience);

    const savedSalaryIncrement = JSON.parse(localStorage.getItem('salaryIncrement')) || 0;
    setSalaryIncrement(savedSalaryIncrement);
  }, []);

  // Save tasks to localStorage
  const saveTasks = (newTasks) => {
    localStorage.setItem('employeeTasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  // Save other progress data
  const saveProgress = () => {
    localStorage.setItem('workProgress', JSON.stringify(workProgress));
    localStorage.setItem('skillsProgress', JSON.stringify(skillsProgress));
    localStorage.setItem('experience', JSON.stringify(experience));
    localStorage.setItem('salaryIncrement', JSON.stringify(salaryIncrement));
  };

  // Handle form submission
  const handleAddTask = (e) => {
    e.preventDefault();

    const newTask = {
      taskName,
      deadline,
      progress: parseInt(taskProgress, 10),
    };

    const updatedTasks = [...tasks, newTask];
    saveTasks(updatedTasks);

    // Reset form inputs
    setTaskName('');
    setDeadline('');
    setTaskProgress('');
  };

  // Calculate status of each task
  const calculateTaskStatus = (progress) => {
    return progress >= 100 ? 'Completed' : 'In Progress';
  };

  // Handle save for overall progress
  const handleSaveProgress = () => {
    saveProgress();
    alert('Progress Saved!');
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
    <div id="employeeProgressContainer">
      <h1 id="employeeProgressHeading">Employee Progress Dashboard</h1>

      {/* Task Progress Section */}
      <form id="employeeProgressForm" onSubmit={handleAddTask}>
        <input
          type="text"
          id="taskNameInput"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <input
          type="date"
          id="taskDeadlineInput"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <input
          type="number"
          id="taskProgressInput"
          placeholder="Task Progress (%)"
          value={taskProgress}
          onChange={(e) => setTaskProgress(e.target.value)}
          required
          min="0"
          max="100"
        />
        <button type="submit" id="addTaskButton">Add Task</button>
      </form>

      <h2 id="employeeTasksHeading">Employee Tasks</h2>
      <table id="employeeProgressTable">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Deadline</th>
            <th>Progress (%)</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id="employeeProgressTableBody">
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.taskName}</td>
              <td>{task.deadline}</td>
              <td>{task.progress}%</td>
              <td>{calculateTaskStatus(task.progress)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Other Progress Sections */}
      <h2 id="overallProgressHeading">Overall Employee Progress</h2>

      <div id="progressSections">
        <div className="progress-section">
          <label htmlFor="workProgressInput">Work Progress (%):</label>
          <input
            type="number"
            id="workProgressInput"
            value={workProgress}
            onChange={(e) => setWorkProgress(e.target.value)}
            min="0"
            max="100"
          />
        </div>

        <div className="progress-section">
          <label htmlFor="skillsProgressInput">Skills Progress (%):</label>
          <input
            type="number"
            id="skillsProgressInput"
            value={skillsProgress}
            onChange={(e) => setSkillsProgress(e.target.value)}
            min="0"
            max="100"
          />
        </div>

        <div className="progress-section">
          <label htmlFor="experienceInput">Experience (Years):</label>
          <input
            type="number"
            id="experienceInput"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            min="0"
          />
        </div>

        <div className="progress-section">
          <label htmlFor="salaryIncrementInput">Salary Increment (%):</label>
          <input
            type="number"
            id="salaryIncrementInput"
            value={salaryIncrement}
            onChange={(e) => setSalaryIncrement(e.target.value)}
            min="0"
          />
        </div>

        <button id="saveProgressButton" onClick={handleSaveProgress}>Save Progress</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default EmployeeProgress;
