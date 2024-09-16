import { useState, useEffect } from 'react';
import './PagesCss.css';  // Ensure this imports your CSS file
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import Sidebar from '../../AdminDashboardPages/AdminSidebar';
import { Col, Card } from 'react-bootstrap';
import { FaUsers } from 'react-icons/fa';

function Employees() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('userProfile')) || []);
  const [employee, setEmployee] = useState({
    name: '',
    age: '',
    city: '',
    email: '',
    phone: '',
    post: '',
    sDate: '',
    picture: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Sync employees to localStorage
  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(employees));
  }, [employees]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [id]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file.size < 1000000) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setEmployee((prevEmployee) => ({
          ...prevEmployee,
          picture: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    } else {
      alert('File too large!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedEmployees = employees.map((emp, index) =>
        index === editIndex ? employee : emp
      );
      setEmployees(updatedEmployees);
      setIsEditing(false);
    } else {
      setEmployees([...employees, employee]);
    }
    setEmployee({
      name: '',
      age: '',
      city: '',
      email: '',
      phone: '',
      post: '',
      sDate: '',
      picture: ''
    });
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const editEmployee = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEmployee(employees[index]);
  };

  const readEmployee = (employee) => {
    alert(`Details: ${JSON.stringify(employee, null, 2)}`);
  };

  return (
    <div className="d-flex flex-column">
      <NavbarComponent /> 
      <div className="d-flex flex-grow-1">
        <Sidebar />

        <div id="payment-table-container" className='col-xl-10 col-lg-9 col-md-6 col-sm-12'>
          <div id="payment-header" className='card-8 rounded-border mb-4'>
            <h1><i className="fa fa-users" style={{ fontSize: "30px" }}></i> Employee Management</h1>
            <hr />
          </div>

          {/* Card Displaying Employee Count */}
          <Col md={3} sm={6} className="mb-4">
            <Card className="text-center card-width card-employees">
              <Card.Body className="dashCard">
                <FaUsers size={40} />
                <Card.Title className='mainCardText'>Employees</Card.Title>
                <Card.Text className='CardTitle'>{employees.length}</Card.Text> {/* Dynamic employee count */}
              </Card.Body>
            </Card>
          </Col>

          {/* Add Employee Form */}
          <form id="employee-form" onSubmit={handleSubmit}>
            <div id="img-holder">
              <label htmlFor="imgInput" className="upload-label">
                <input type="file" id="imgInput" onChange={handleFileChange} />
                <i className="icon-upload"></i> Upload
              </label>
              <img
                id="profile-pic"
                src={employee.picture || '/static/images/Profile Icon.webp'}
                alt="Profile"
                width="100"
                height="100"
              />
            </div>

            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="input-text"
                value={employee.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                className="input-text"
                value={employee.age}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                className="input-text"
                value={employee.city}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                className="input-text"
                value={employee.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                className="input-text"
                value={employee.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="post">Post:</label>
              <input
                type="text"
                id="post"
                className="input-text"
                value={employee.post}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input-field">
              <label htmlFor="sDate">Start Date:</label>
              <input
                type="date"
                id="sDate"
                className="input-text"
                value={employee.sDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <button id="submit-btn" type="submit">{isEditing ? 'Update' : 'Submit'}</button>
          </form>

          {/* Employee Table */}
          <table id="employee-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Post</th>
                <th>Start Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, index) => (
                <tr key={index} className="table-row">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="table-img"
                      src={employee.picture || '/static/images/Profile Icon.webp'}
                      alt="Profile"
                      width="50"
                      height="50"
                    />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.city}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.post}</td>
                  <td>{employee.sDate}</td>
                  <td>
                    <button className="action-btn view-btn" onClick={() => readEmployee(employee)}>View</button>
                    <button className="action-btn edit-btn" onClick={() => editEmployee(index)}>Edit</button>
                    <button className="action-btn delete-btn" onClick={() => deleteEmployee(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
