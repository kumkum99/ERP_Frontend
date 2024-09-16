import React, { useState,useContext  } from 'react';
import { Container, Form, Button, Row, Col, Modal } from 'react-bootstrap'; // Import Modal
import './PagesCss.css';  
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const Setting = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [name, setName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [showModal, setShowModal] = useState(false);  // State for modal visibility
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);

    const handlePasswordChange = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setShowModal(true); // Show modal on successful submission
            // API call to update the password
        } else {
            alert('Passwords do not match!');
        }
    };

    const handleProfileUpdate = (e) => {
        e.preventDefault();
        // API call to update profile
        setShowModal(true); // Show modal on successful submission
    };

    const handleToggleNotifications = () => {
        setNotificationsEnabled(!notificationsEnabled);
        // API call to update notification settings
    };

    const handleClose = () => setShowModal(false); // Close the modal

    return (
        <div className="d-flex flex-column admin-settings-page"
        id="homePageContainer"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#f0f0f0",
          color: fontColor,
          fontSize: fontSize,
        }}
        >
            <NavbarComponent />
            <div className="d-flex flex-grow-1">
                <Sidebar />
                <main className="flex-grow-1 p-4">
                    <Container fluid>
                        <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
                            <div id="payment-header" className='card-8 rounded-border mb-4'>
                                <h1><i className="fa fa-comments" style={{ fontSize: "30px" }}></i> Admin Settings</h1>
                                <hr />

                                <Row>
                                    {/* General Settings Section */}
                                    <Col md={6}>
                                        <div className="settings-section">
                                            <h3>General Settings</h3>
                                            <Form>
                                                <Form.Group controlId="formSiteName">
                                                    <Form.Label>Site Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter site name" />
                                                </Form.Group>
                                                <Form.Group controlId="formAdminEmail" className="mt-3">
                                                    <Form.Label>Admin Email</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter admin email" />
                                                </Form.Group>
                                                <Button className="mt-4" variant="primary">Save Changes</Button>
                                            </Form>
                                        </div>
                                    </Col>

                                    {/* Password Change Section */}
                                    <Col md={6}>
                                        <div className="settings-section">
                                            <h3>Change Password</h3>
                                            <Form onSubmit={handlePasswordChange}>
                                                <Form.Group controlId="formPassword">
                                                    <Form.Label>New Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter new password"
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formConfirmPassword" className="mt-3">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Confirm new password"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </Form.Group>
                                                <Button className="mt-4" variant="primary" type="submit">
                                                    Update Password
                                                </Button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>

                                

                                {/* User Profile Settings Section */}
                                <Row className="mt-5">
                                    <Col md={6}>
                                        <div className="settings-section">
                                            <h3>User Profile Settings</h3>
                                            <Form onSubmit={handleProfileUpdate}>
                                                <Form.Group controlId="formProfilePicture">
                                                    <Form.Label>Profile Picture</Form.Label>
                                                    <Form.Control 
                                                        type="file" 
                                                        onChange={(e) => setProfilePicture(e.target.files[0])} 
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formName" className="mt-3">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        placeholder="Enter your name" 
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)} 
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formContactInfo" className="mt-3">
                                                    <Form.Label>Contact Information</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        placeholder="Enter contact information" 
                                                        value={contactInfo}
                                                        onChange={(e) => setContactInfo(e.target.value)} 
                                                    />
                                                </Form.Group>
                                                <Button className="mt-4" variant="primary" type="submit">
                                                    Save Profile Changes
                                                </Button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        {/* Modal for successful submission */}
                        <Modal show={showModal} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Success</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                Your changes have been saved successfully!
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </main>
            </div>
        </div>
    );
};

export default Setting;
