import React from 'react';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDash from './Dashboard/AdminDash';
import EmployeeDash from './Dashboard/EmployeeDash';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';

// employee Dashboard importation
import Profile from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/Profile';
import AttendanceLeave from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/AttendanceLeave';
import Calendar from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/Calendar';
import ShiftManagement from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/ShiftManagement';
import WorkDeadline from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/WorkDeadline';
import EmployeeProgress from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/EmployeeProgress';
import CourseMaterial from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/CourseMaterial';
import EmployeeCourseProgress from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/EmployeeCourseProgress';
import EmployeeDocumentation from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/EmployeeDocumentation';
import SettingsPage from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/SettingsPage';
import FeedbackEmp from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/FeedbackEmp';

// admin Dashboard importation
import Employees from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/Employees';
import Feedback from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/Feedback';
import Orders from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/Orders';
import Payment from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/Payment';
import Product from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/Product';
import Reports from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/Reports';
import SettingPage from './Dashboard/AdminDashboardPages/AdminDashboardInnerPages/SettingPage';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalSettingsProvider } from './Dashboard/context/GlobalSettingsContext';
import { CourseProvider } from './Dashboard/context/CourseContext'; // Import the CourseProvider


function App() {
    return (
        <GlobalSettingsProvider>
            <CourseProvider>
                <div className="App">
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/adminDashboard" element={<AdminDash />} />
                            <Route path="/employeeDashboard" element={<EmployeeDash />} />
                            <Route path="/forgotPassword" element={<ForgotPassword />} />
                            <Route path="/resetPassword/:token" element={<ResetPassword />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/attenLeave" element={<AttendanceLeave />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/feedbackemp" element={<FeedbackEmp/>} />
                            <Route path="/shifts" element={<ShiftManagement />} />
                            <Route path="/workDeadline" element={<WorkDeadline />} />
                            <Route path="/employeeProgress" element={<EmployeeProgress />} />
                            <Route path="/courseMaterial" element={<CourseMaterial />} />
                            <Route path="/employeeCourseProgress" element={<EmployeeCourseProgress />} />
                            <Route path="/employeeDocumentation" element={<EmployeeDocumentation />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/feedback" element={<Feedback />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/payments" element={<Payment />} />
                            <Route path="/products" element={<Product />} />
                            <Route path="/reports" element={<Reports />} />
                            <Route path="/settingAdmin" element={<SettingPage />} />
                           
                        </Routes>
                    </Router>
                </div>
            </CourseProvider>
        </GlobalSettingsProvider>
    );
}

export default App;
