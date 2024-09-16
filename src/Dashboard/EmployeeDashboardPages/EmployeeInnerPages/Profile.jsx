import React, { useState, useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from '../../context/GlobalSettingsContext';


const Profile = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);

    // State to hold the employee profile information
    const [profileInfo, setProfileInfo] = useState({
        fullName: 'Kumkum Singh',
        position: 'Frontend Developer',
        company: 'Google LLC',
        location: 'Mountain View, California, USA',
        email: 'kumkum.singh@gmail.com',
        phone: '+1 (123) 456-7890',
        about: 'Kumkum Singh belongs to Uttar Pradesh, India. Passionate about design and user experience, Kumkum is constantly exploring new technologies to improve web development workflows and deliver outstanding user experiences.',
        profileImage: 'https://via.placeholder.com/100' // Default placeholder image
    });

    // State for dynamic sections
    const [skills, setSkills] = useState(["JavaScript", "React", "CSS", "HTML"]); // Initial skills
    const [newSkill, setNewSkill] = useState(""); // To track the new skill input

    const [experience, setExperience] = useState([
        { jobTitle: "Frontend Developer", company: "Google", duration: "Jan 2022 - Present" },
        { jobTitle: "UI/UX Designer", company: "Facebook", duration: "Jul 2019 - Dec 2021" }
    ]);
    const [newExperience, setNewExperience] = useState({ jobTitle: "", company: "", duration: "" });

    const [achievements, setAchievements] = useState(["Awarded Employee of the Year 2023"]);
    const [newAchievement, setNewAchievement] = useState("");

    const [education, setEducation] = useState([
        { degree: "B.Tech in Computer Science", institution: "IIT Delhi", years: "2014-2018" }
    ]);
    const [newEducation, setNewEducation] = useState({ degree: "", institution: "", years: "" });

    const [passwords, setPasswords] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const [activeTab, setActiveTab] = useState('overview');

    // Handle form input changes for profile info
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo({ ...profileInfo, [name]: value });
    };

    // Handle password changes
    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileInfo({ ...profileInfo, profileImage: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    // Add a new skill
    const handleAddSkill = () => {
        if (newSkill) {
            setSkills([...skills, newSkill]);
            setNewSkill(""); // Clear input after adding
        }
    };

    // Remove a skill
    const handleRemoveSkill = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    // Handle experience input changes
    const handleExperienceInputChange = (e) => {
        const { name, value } = e.target;
        setNewExperience({ ...newExperience, [name]: value });
    };

    // Add a new experience
    const handleAddExperience = () => {
        if (newExperience.jobTitle && newExperience.company && newExperience.duration) {
            setExperience([...experience, newExperience]);
            setNewExperience({ jobTitle: "", company: "", duration: "" }); // Clear input after adding
        }
    };

    // Add a new achievement
    const handleAddAchievement = () => {
        if (newAchievement) {
            setAchievements([...achievements, newAchievement]);
            setNewAchievement(""); // Clear input after adding
        }
    };

    // Handle education input changes
    const handleEducationInputChange = (e) => {
        const { name, value } = e.target;
        setNewEducation({ ...newEducation, [name]: value });
    };

    // Add a new education
    const handleAddEducation = () => {
        if (newEducation.degree && newEducation.institution && newEducation.years) {
            setEducation([...education, newEducation]);
            setNewEducation({ degree: "", institution: "", years: "" }); // Clear input after adding
        }
    };

    const handleSubmitProfile = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    const handleSubmitEmail = (e) => {
        e.preventDefault();
        alert('Email updated successfully!');
    };

    const handleSubmitPassword = (e) => {
        e.preventDefault();
        if (passwords.newPassword === passwords.confirmPassword) {
            alert('Password updated successfully!');
        } else {
            alert('Passwords do not match!');
        }
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
                <section id="profile" className="profile-section">
                    <section className="profile-bg-light profile-py">
                        <div className="profile-container">
                            <div className="profile-row">
                                <div className="profile-col">
                                    <h2 className="profile-title">Profile</h2>
                                    <p className="profile-description">
                                        The Profile page is your digital hub, where you can fine-tune your experience. Here's a closer look at the settings you can expect to find in your profile page.
                                    </p>
                                    <hr className="profile-divider" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="profile-container">
                        <div className="profile-sidebar">
                            <div className="profile-card">
                                <h5 className="profile-card-title">Welcome, {profileInfo.fullName}</h5>
                                {/* Profile Image */}
                                <label htmlFor="profile-image-upload">
                                    <img src={profileInfo.profileImage} alt="Profile" className="profile-picture" />
                                </label>
                                <input
                                    type="file"
                                    id="profile-image-upload"
                                    style={{ display: 'none' }}
                                    onChange={handleImageUpload}
                                />
                                <h6 className="profile-card-subtitle">{profileInfo.position} At {profileInfo.company}</h6>
                                <ul className="profile-stats">
                                    <li>Followers <span>7,854</span></li>
                                    <li>Following <span>5,987</span></li>
                                    <li>Friends <span>4,620</span></li>
                                </ul>
                                <button className="profile-btn">Follow</button>
                            </div>

                            {/* About Me Section */}
                            <div className="profile-card">
                                <div className="profile-card-header">About Me</div>
                                <div className="profile-card-body">
                                    <p>{profileInfo.about}</p>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="profile-card">
                                <div className="profile-card-header">Skills</div>
                                <div className="profile-card-body">
                                    <ul>
                                        {skills.map((skill, index) => (
                                            <li key={index}>
                                                {skill}
                                                <button onClick={() => handleRemoveSkill(skill)}>Remove</button>
                                            </li>
                                        ))}
                                    </ul>
                                    <input
                                        type="text"
                                        value={newSkill}
                                        placeholder="Add new skill"
                                        onChange={(e) => setNewSkill(e.target.value)}
                                    />
                                    <button onClick={handleAddSkill}>Add Skill</button>
                                </div>
                            </div>
                        </div>

                        <div className="profile-main-content">
                            <div className="profile-tabs">
                                <button className={`profile-tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
                                <button className={`profile-tab-button ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
                                <button className={`profile-tab-button ${activeTab === 'emails' ? 'active' : ''}`} onClick={() => setActiveTab('emails')}>Emails</button>
                                <button className={`profile-tab-button ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}>Password</button>
                            </div>

                            {/* Overview Tab */}
                            <div className={`profile-tab-content ${activeTab === 'overview' ? 'active' : ''}`} id="overview">
                                <h5>Profile Overview</h5>
                                <table className="profile-table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Full Name:</strong></td>
                                            <td>{profileInfo.fullName}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Position:</strong></td>
                                            <td>{profileInfo.position}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Company:</strong></td>
                                            <td>{profileInfo.company}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Location:</strong></td>
                                            <td>{profileInfo.location}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email:</strong></td>
                                            <td>{profileInfo.email}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phone:</strong></td>
                                            <td>{profileInfo.phone}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Experience Section */}
                                <h5>Experience</h5>
                                <ul>
                                    {experience.map((exp, index) => (
                                        <li key={index}>
                                            {exp.jobTitle} at {exp.company} ({exp.duration})
                                        </li>
                                    ))}
                                </ul>

                                {/* Achievements Section */}
                                <h5>Achievements</h5>
                                <ul>
                                    {achievements.map((achievement, index) => (
                                        <li key={index}>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>

                                {/* Education Section */}
                                <h5>Education</h5>
                                <ul>
                                    {education.map((edu, index) => (
                                        <li key={index}>
                                            {edu.degree} at {edu.institution} ({edu.years})
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Profile Tab */}
                            <div className={`profile-tab-content ${activeTab === 'profile' ? 'active' : ''}`} id="profile">
                                <h5>Profile Settings</h5>
                                <form className="profile-form" onSubmit={handleSubmitProfile}>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name:</label>
                                        <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Enter full name" value={profileInfo.fullName} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="position">Position:</label>
                                        <input type="text" id="position" name="position" className="form-control" placeholder="Enter position" value={profileInfo.position} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="company">Company:</label>
                                        <input type="text" id="company" name="company" className="form-control" placeholder="Enter company" value={profileInfo.company} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="location">Location:</label>
                                        <input type="text" id="location" name="location" className="form-control" placeholder="Enter location" value={profileInfo.location} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="about">About Me:</label>
                                        <textarea id="about" name="about" className="form-control" placeholder="Enter about yourself" value={profileInfo.about} onChange={handleInputChange}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone:</label>
                                        <input type="tel" id="phone" name="phone" className="form-control" placeholder="Enter phone number" value={profileInfo.phone} onChange={handleInputChange} />
                                    </div>
                                    <button type="submit" className="profile-btn">Save Changes</button>
                                </form>

                                {/* Experience Section in Profile */}
                                <div className="form-group">
                                    <h5>Experience</h5>
                                    {experience.map((exp, index) => (
                                        <div key={index}>
                                            <p>{exp.jobTitle} at {exp.company} ({exp.duration})</p>
                                        </div>
                                    ))}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Job Title"
                                            name="jobTitle"
                                            value={newExperience.jobTitle}
                                            onChange={handleExperienceInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Company"
                                            name="company"
                                            value={newExperience.company}
                                            onChange={handleExperienceInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Duration"
                                            name="duration"
                                            value={newExperience.duration}
                                            onChange={handleExperienceInputChange}
                                        />
                                        <button onClick={handleAddExperience}>Add Experience</button>
                                    </div>
                                </div>

                                {/* Achievements Section in Profile */}
                                <div className="form-group">
                                    <h5>Achievements</h5>
                                    {achievements.map((achievement, index) => (
                                        <div key={index}>
                                            <p>{achievement}</p>
                                        </div>
                                    ))}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Add Achievement"
                                            value={newAchievement}
                                            onChange={(e) => setNewAchievement(e.target.value)}
                                        />
                                        <button onClick={handleAddAchievement}>Add Achievement</button>
                                    </div>
                                </div>

                                {/* Education Section in Profile */}
                                <div className="form-group">
                                    <h5>Education</h5>
                                    {education.map((edu, index) => (
                                        <div key={index}>
                                            <p>{edu.degree} at {edu.institution} ({edu.years})</p>
                                        </div>
                                    ))}
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Degree"
                                            name="degree"
                                            value={newEducation.degree}
                                            onChange={handleEducationInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Institution"
                                            name="institution"
                                            value={newEducation.institution}
                                            onChange={handleEducationInputChange}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Years"
                                            name="years"
                                            value={newEducation.years}
                                            onChange={handleEducationInputChange}
                                        />
                                        <button onClick={handleAddEducation}>Add Education</button>
                                    </div>
                                </div>
                            </div>

                            {/* Emails Tab */}
                            <div className={`profile-tab-content ${activeTab === 'emails' ? 'active' : ''}`} id="emails">
                                <h5>Email Settings</h5>
                                <form className="profile-email-form" onSubmit={handleSubmitEmail}>
                                    <div className="form-group">
                                        <label htmlFor="current-email">Current Email:</label>
                                        <input type="email" id="current-email" name="currentEmail" className="form-control" value={profileInfo.email} readOnly />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="new-email">New Email:</label>
                                        <input type="email" id="new-email" name="email" className="form-control" placeholder="Enter new email" value={profileInfo.email} onChange={handleInputChange} />
                                    </div>
                                    <button type="submit" className="profile-btn">Update Email</button>
                                </form>
                            </div>

                            {/* Password Tab */}
                            <div className={`profile-tab-content ${activeTab === 'password' ? 'active' : ''}`} id="password">
                                <h5>Change Password</h5>
                                <form onSubmit={handleSubmitPassword}>
                                    <div className="form-group">
                                        <label htmlFor="current-password">Current Password:</label>
                                        <input type="password" id="current-password" name="currentPassword" className="form-control" value={passwords.currentPassword} onChange={handlePasswordChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="new-password">New Password:</label>
                                        <input type="password" id="new-password" name="newPassword" className="form-control" value={passwords.newPassword} onChange={handlePasswordChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm-password">Confirm Password:</label>
                                        <input type="password" id="confirm-password" name="confirmPassword" className="form-control" value={passwords.confirmPassword} onChange={handlePasswordChange} />
                                    </div>
                                    <button type="submit" className="profile-btn">Update Password</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Profile;
