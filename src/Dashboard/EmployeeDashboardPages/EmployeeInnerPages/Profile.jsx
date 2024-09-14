import React, { useState } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'

const Profile = () => {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="d-flex flex-column">
        <NavbarComponent /> 
        <div className="d-flex flex-grow-1">
          <EmpSidebar />
        <section id="profile" className="profile-section">
            {/* Header Section */}
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
            
            {/* Main Profile Section */}
            <section className="profile-container">
                {/* Sidebar Section */}
                <div className="profile-sidebar">
                    <div className="profile-card">
                        <h5 className="profile-card-title">Welcome, Kumkum Singh</h5>
                        <img src="https://via.placeholder.com/100" alt="Profile Picture" className="profile-picture" />
                        <h6 className="profile-card-subtitle">Frontend Developer At Google</h6>
                        <ul className="profile-stats">
                            <li>Followers <span>7,854</span></li>
                            <li>Following <span>5,987</span></li>
                            <li>Friends <span>4,620</span></li>
                        </ul>
                        <button className="profile-btn">Follow</button>
                    </div>

                    {/* Social Accounts Section */}
                    <div className="profile-card">
                        <div className="profile-card-header">Social Accounts</div>
                        <div className="profile-social-links">
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                    {/* About Me Section */}
                    <div className="profile-card">
                        <div className="profile-card-header">About Me</div>
                        <div className="profile-card-body">
                            <p>Kumkum Singh belongs to Uttar Pradesh, India. Kumkum is a Frontend Developer at Google LLC, passionate about creating intuitive and dynamic web interfaces. With years of experience in web development, Kumkum has contributed to various high-profile projects within the company, specializing in responsive design and performance optimization.</p>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="profile-main-content">
                    {/* Tabs for Navigation */}
                    <div className="profile-tabs">
                        <button className={`profile-tab-button ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
                        <button className={`profile-tab-button ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
                        <button className={`profile-tab-button ${activeTab === 'emails' ? 'active' : ''}`} onClick={() => setActiveTab('emails')}>Emails</button>
                        <button className={`profile-tab-button ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}>Password</button>
                    </div>

                    {/* Tab Content */}
                    <div className={`profile-tab-content ${activeTab === 'overview' ? 'active' : ''}`} id="overview">
                        <h5>About</h5>
                        <p>Kumkum Singh belongs to Uttar Pradesh, India. Passionate about design and user experience, Kumkum is constantly exploring new technologies to improve web development workflows and deliver outstanding user experiences.</p>
                        <h5>Profile</h5>
                        <table>
                            <tbody>
                                <tr>
                                    <td><strong>Full Name:</strong></td>
                                    <td>Kumkum Singh</td>
                                </tr>
                                <tr>
                                    <td><strong>Position:</strong></td>
                                    <td>Frontend Developer</td>
                                </tr>
                                <tr>
                                    <td><strong>Company:</strong></td>
                                    <td>Google LLC</td>
                                </tr>
                                <tr>
                                    <td><strong>Location:</strong></td>
                                    <td>Mountain View, California, USA</td>
                                </tr>
                                <tr>
                                    <td><strong>Email:</strong></td>
                                    <td>kumkum.singh@gmail.com</td>
                                </tr>
                                <tr>
                                    <td><strong>Phone:</strong></td>
                                    <td>+1 (123) 456-7890</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                 {/* Profile Tab */}
<div className={`profile-tab-content ${activeTab === 'profile' ? 'active' : ''}`} id="profile">
    <h5>Edit Profile Information</h5>
    <p>This section allows you to update your profile details.</p>
    <form className="profile-form">
        <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" className="form-control" placeholder="Enter full name" defaultValue="Kumkum Singh" />
        </div>
        <div className="form-group">
            <label htmlFor="position">Position:</label>
            <input type="text" id="position" name="position" className="form-control" placeholder="Enter position" defaultValue="Frontend Developer" />
        </div>
        <div className="form-group">
            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" className="form-control" placeholder="Enter company name" defaultValue="Google LLC" />
        </div>
        <div className="form-group">
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" className="form-control" placeholder="Enter location" defaultValue="Mountain View, California, USA" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" className="form-control" placeholder="Enter email" defaultValue="kumkum.singh@gmail.com" />
        </div>
        <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" className="form-control" placeholder="Enter phone number" defaultValue="+1 (123) 456-7890" />
        </div>
        <button type="submit" className="profile-btn">Save Changes</button>
    </form>
</div>

                   {/* Emails Tab */}
<div className={`profile-tab-content ${activeTab === 'emails' ? 'active' : ''}`} id="emails">
    <h5>Email Settings</h5>
    <p>Manage your email settings from this section. You can update your email address, manage notifications, and set preferences for receiving updates about your profile and activity.</p>
    <form className="profile-email-form">
        <div className="form-group">
            <label htmlFor="current-email">Current Email:</label>
            <input type="email" id="current-email" name="current-email" className="form-control" value="kumkum.singh@gmail.com" readOnly />
        </div>
        <div className="form-group">
            <label htmlFor="new-email">New Email:</label>
            <input type="email" id="new-email" name="new-email" className="form-control" placeholder="Enter new email" />
        </div>
        <div className="form-group">
            <label htmlFor="confirm-email">Confirm Email:</label>
            <input type="email" id="confirm-email" name="confirm-email" className="form-control" placeholder="Confirm new email" />
        </div>
        <button type="submit" className="profile-btn">Update Email</button>
    </form>
</div>


                    {/* Password Tab */}
                    <div className={`profile-tab-content ${activeTab === 'password' ? 'active' : ''}`} id="password">
                        <h5>Change Password</h5>
                        <p>For security purposes, you can update your password here. Ensure your password is strong and secure, with at least 8 characters, including a mix of letters, numbers, and special characters.</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="current-password">Current Password:</label>
                                <input type="password" id="current-password" name="current-password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="new-password">New Password:</label>
                                <input type="password" id="new-password" name="new-password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password:</label>
                                <input type="password" id="confirm-password" name="confirm-password" className="form-control" />
                            </div>
                            <button type="submit" className="profile-btn">Update Password</button>
                        </form>
                    </div>
                </div>
            </section>
        </section>
        </div></div>
    );
};

export default Profile;
