import React, {useContext } from 'react';
import jsPDF from 'jspdf';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const EmployeeDocumentation = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  // Sample employee data (this can be fetched dynamically from an API or database)
  const employeeData = {
    name: 'John Doe',
    jobTitle: 'Senior Software Engineer',
    department: 'Development',
    contactInfo: {
      phone: '+1 (123) 456-7890',
      email: 'john.doe@example.com',
      location: 'San Francisco, CA',
    },
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Java'],
    experience: [
      {
        jobTitle: 'Software Engineer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2020 - Present',
        description: 'Developed full-stack web applications using React, Node.js, and PostgreSQL.'
      },
      {
        jobTitle: 'Junior Developer',
        company: 'Web Innovations',
        duration: 'Jun 2017 - Dec 2019',
        description: 'Worked on front-end development using JavaScript, HTML, CSS, and Bootstrap.'
      },
    ],
    education: [
      {
        degree: 'B.Sc. in Computer Science',
        university: 'University of California, Berkeley',
        year: '2016',
      },
    ],
    projects: [
      {
        projectName: 'E-commerce Platform',
        description: 'Developed a full-fledged e-commerce website using React and Node.js.',
        status: 'Completed',
      },
      {
        projectName: 'CRM System',
        description: 'Building a customer relationship management system using Python and Flask.',
        status: 'In Progress',
      },
    ],
    achievements: ['Certified Java Developer', 'Employee of the Year - 2022'],
    progress: 'Excellent',
  };

  // Generate PDF function
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Resume: John Doe', 20, 10);
    doc.text(`Name: ${employeeData.name}`, 20, 20);
    doc.text(`Job Title: ${employeeData.jobTitle}`, 20, 30);
    doc.text(`Department: ${employeeData.department}`, 20, 40);
    doc.text(`Phone: ${employeeData.contactInfo.phone}`, 20, 50);
    doc.text(`Email: ${employeeData.contactInfo.email}`, 20, 60);
    doc.text(`Location: ${employeeData.contactInfo.location}`, 20, 70);
    doc.text('Skills:', 20, 80);
    employeeData.skills.forEach((skill, index) => {
      doc.text(`${index + 1}. ${skill}`, 30, 90 + index * 10);
    });
    doc.text('Experience:', 20, 140);
    employeeData.experience.forEach((exp, index) => {
      doc.text(`${index + 1}. ${exp.jobTitle} at ${exp.company}`, 30, 150 + index * 10);
      doc.text(`   Duration: ${exp.duration}`, 30, 160 + index * 10);
    });
    doc.text('Education:', 20, 210);
    employeeData.education.forEach((edu, index) => {
      doc.text(`${index + 1}. ${edu.degree}, ${edu.university} (${edu.year})`, 30, 220 + index * 10);
    });
    doc.text('Projects:', 20, 240);
    employeeData.projects.forEach((project, index) => {
      doc.text(`${index + 1}. ${project.projectName}`, 30, 250 + index * 10);
      doc.text(`   ${project.description}`, 30, 260 + index * 10);
    });
    doc.text('Achievements:', 20, 300);
    employeeData.achievements.forEach((achievement, index) => {
      doc.text(`${index + 1}. ${achievement}`, 30, 310 + index * 10);
    });
    doc.save('employee_resume.pdf');
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
    <div id="employeeResumeContainer">
      <h1 id="employeeResumeHeading">Employee Resume</h1>
      
      <div id="employeePersonalInfo">
        <h2 id="employeePersonalInfoHeading">Personal Information</h2>
        <p><strong>Name:</strong> {employeeData.name}</p>
        <p><strong>Job Title:</strong> {employeeData.jobTitle}</p>
        <p><strong>Department:</strong> {employeeData.department}</p>
        <p><strong>Phone:</strong> {employeeData.contactInfo.phone}</p>
        <p><strong>Email:</strong> {employeeData.contactInfo.email}</p>
        <p><strong>Location:</strong> {employeeData.contactInfo.location}</p>
      </div>

      <div id="employeeSkills">
        <h2 id="employeeSkillsHeading">Skills</h2>
        <ul id="employeeSkillsList">
          {employeeData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div id="employeeExperience">
        <h2 id="employeeExperienceHeading">Experience</h2>
        {employeeData.experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.jobTitle} at {exp.company}</h3>
            <p><strong>Duration:</strong> {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div id="employeeEducation">
        <h2 id="employeeEducationHeading">Education</h2>
        {employeeData.education.map((edu, index) => (
          <div key={index}>
            <p>{edu.degree}, {edu.university} ({edu.year})</p>
          </div>
        ))}
      </div>

      <div id="employeeProjects">
        <h2 id="employeeProjectsHeading">Projects</h2>
        {employeeData.projects.map((project, index) => (
          <div key={index}>
            <h3>{project.projectName}</h3>
            <p>{project.description}</p>
            <p><strong>Status:</strong> {project.status}</p>
          </div>
        ))}
      </div>

      <div id="employeeAchievements">
        <h2 id="employeeAchievementsHeading">Achievements</h2>
        <ul id="employeeAchievementsList">
          {employeeData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <button id="downloadPdfButton" onClick={generatePDF}>Download as PDF</button>
    </div>
    </div>
    </div>
  );
};

export default EmployeeDocumentation;
