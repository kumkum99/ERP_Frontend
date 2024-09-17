import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagesCSS.css'; // Assuming the CSS is stored here
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const FeedbackEmp = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        mostLike: '',
        comments: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // The updated handleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://erpunity-production.up.railway.app/api/feedback/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convert form data to JSON
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Feedback submitted successfully:', result);
                alert("Your Feedback is submitted");
                // You can add further actions, like clearing the form or showing a success message
                setFormData({
                    name: '',
                    email: '',
                    role: '',
                    mostLike: '',
                    comments: '',
                });
            } else {
                console.error('Error submitting feedback:', response.status);
            }
        } catch (error) {
            console.error('Error submitting feedback:', error);
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
                <div id="feedback-form-container" className="container mt-5">
                    {/* Heading */}
                    <h1 id="feedback-title" className="text-center">
                        Enterprise Resource Planning Feedback Form
                    </h1>
                    <p id="feedback-description" className="text-center">
                        Thank you for taking the time to help us improve the platform.
                    </p>

                    {/* Form */}
                    <form id="feedback-survey-form" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div id="feedback-name-container" className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="feedback-name-input"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email Field */}
                        <div id="feedback-email-container" className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="feedback-email-input"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Role Selection */}
                        <div id="feedback-role-container" className="mb-3">
                            <p id="feedback-role-paragraph">Which option best describes your current role?</p>
                            <select
                                id="feedback-role-dropdown"
                                name="role"
                                className="form-control"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option disabled value="">
                                    Select current role
                                </option>
                                <option value="marketingCoordinator">Marketing Coordinator</option>
                                <option value="teamLeader">Team Leader</option>
                                <option value="assistantManager">Assistant Manager</option>
                                <option value="manager">Manager</option>
                                <option value="executive">Executive</option>
                            </select>
                        </div>

                        {/* Most Like Selection */}
                        <div id="feedback-like-container" className="mb-3">
                            <p id="feedback-like-paragraph">What do you like the most?</p>
                            <select
                                id="feedback-like-dropdown"
                                name="mostLike"
                                className="form-control"
                                value={formData.mostLike}
                                onChange={handleChange}
                                required
                            >
                                <option disabled value="">
                                    Select an option
                                </option>
                                <option value="challenges">Challenges</option>
                                <option value="projects">Projects</option>
                                <option value="community">Community</option>
                                <option value="openSource">Open Source</option>
                            </select>
                        </div>

                        {/* Comments Section */}
                        <div id="feedback-comments-container" className="mb-3">
                            <p id="feedback-comments-paragraph">Any comments or suggestions?</p>
                            <textarea
                                className="form-control"
                                id="feedback-comments-textarea"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                placeholder="Enter your comment here..."
                                rows="5"
                            />
                        </div>

                        {/* Submit Button */}
                        <div id="feedback-submit-container" className="mb-3">
                            <button
                                type="submit"
                                id="feedback-submit-button"
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FeedbackEmp;
