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
import Profile from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/Profile';
import AttendanceLeave from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/AttendanceLeave';
import Calendar from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/Calendar';
import ShiftManagement from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/ShiftManagement';
import WorkDeadline from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/WorkDeadline';
import EmployeeProgress from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/EmployeeProgress';
import CourseMaterial from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/CourseMaterial';
import EmployeeCourseProgress from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/EmployeeCourseProgress';
import EmployeeDocumentation from './Dashboard/EmployeeDashboardPages/EmployeeInnerPages/EmployeeDocumentation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
              
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/Services" element={<Services />} />
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
                    <Route path="/shifts" element={<ShiftManagement />} />
                    <Route path="/workDeadline" element={<WorkDeadline />} />
                    <Route path="/employeeProgress" element={<EmployeeProgress />} />
                    <Route path="/courseMaterial" element={<CourseMaterial />} />
                    <Route path="/employeeCourseProgress" element={<EmployeeCourseProgress />} />
                    <Route path="/employeeDocumentation" element={<EmployeeDocumentation />} />
                   
                </Routes>  
            </Router>
        </div>
    );
}

export default App;
