import React, { useState, useEffect, useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const EmployeeProgress = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
    const [workProgress, setWorkProgress] = useState(0);
    const [skillsProgress, setSkillsProgress] = useState(0);
    const [experience, setExperience] = useState(0);
    const [salaryIncrement, setSalaryIncrement] = useState(0);
    const [companyProgress, setCompanyProgress] = useState(0);

    const [savedProgress, setSavedProgress] = useState({
        workProgress: 0,
        skillsProgress: 0,
        experience: 0,
        salaryIncrement: 0,
        companyProgress: 0
    });

    // Load data from localStorage when component mounts
    useEffect(() => {
        const savedWorkProgress = JSON.parse(localStorage.getItem('workProgress')) || 0;
        setWorkProgress(savedWorkProgress);

        const savedSkillsProgress = JSON.parse(localStorage.getItem('skillsProgress')) || 0;
        setSkillsProgress(savedSkillsProgress);

        const savedExperience = JSON.parse(localStorage.getItem('experience')) || 0;
        setExperience(savedExperience);

        const savedSalaryIncrement = JSON.parse(localStorage.getItem('salaryIncrement')) || 0;
        setSalaryIncrement(savedSalaryIncrement);

        const savedCompanyProgress = JSON.parse(localStorage.getItem('companyProgress')) || 0;
        setCompanyProgress(savedCompanyProgress);
    }, []);

    // Save progress data and display it in the table
    const saveProgress = () => {
        const progressData = {
            workProgress,
            skillsProgress,
            experience,
            salaryIncrement,
            companyProgress
        };

        localStorage.setItem('workProgress', JSON.stringify(workProgress));
        localStorage.setItem('skillsProgress', JSON.stringify(skillsProgress));
        localStorage.setItem('experience', JSON.stringify(experience));
        localStorage.setItem('salaryIncrement', JSON.stringify(salaryIncrement));
        localStorage.setItem('companyProgress', JSON.stringify(companyProgress));

        setSavedProgress(progressData);
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

                        <div className="progress-section">
                            <label htmlFor="companyProgressInput">Company Progress (%):</label>
                            <input
                                type="number"
                                id="companyProgressInput"
                                value={companyProgress}
                                onChange={(e) => setCompanyProgress(e.target.value)}
                                min="0"
                                max="100"
                            />
                        </div>

                        <button id="saveProgressButton" onClick={saveProgress}>Save Progress</button>
                    </div>

                    {/* Progress Table */}
                    <h2 id="savedProgressHeading">Saved Progress</h2>
                    <table id="savedProgressTable">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Work Progress</td>
                                <td>{savedProgress.workProgress}%</td>
                            </tr>
                            <tr>
                                <td>Skills Progress</td>
                                <td>{savedProgress.skillsProgress}%</td>
                            </tr>
                            <tr>
                                <td>Experience</td>
                                <td>{savedProgress.experience} Years</td>
                            </tr>
                            <tr>
                                <td>Salary Increment</td>
                                <td>{savedProgress.salaryIncrement}%</td>
                            </tr>
                            <tr>
                                <td>Company Progress</td>
                                <td>{savedProgress.companyProgress}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmployeeProgress;
