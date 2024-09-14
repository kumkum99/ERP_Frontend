import React, { useState, useEffect, useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const ShiftManagement = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const [currentShifts, setCurrentShifts] = useState([
    { type: 'Morning Shift', date: '2024-08-01', time: '08:00 AM - 04:00 PM' },
    { type: 'Evening Shift', date: '2024-08-02', time: '04:00 PM - 12:00 AM' },
  ]);

  const [historicalShifts, setHistoricalShifts] = useState([
    { type: 'Morning Shift', date: '2024-08-01', time: '08:00 AM - 04:00 PM' },
    { type: 'Evening Shift', date: '2024-08-02', time: '04:00 PM - 12:00 AM' },
    { type: 'Morning Shift', date: '2024-07-15', time: '08:00 AM - 04:00 PM' },
    { type: 'Evening Shift', date: '2024-07-16', time: '04:00 PM - 12:00 AM' },
    { type: 'Morning Shift', date: '2024-06-30', time: '08:00 AM - 04:00 PM' },
    { type: 'Evening Shift', date: '2024-06-29', time: '04:00 PM - 12:00 AM' },
    { type: 'Morning Shift', date: '2024-05-20', time: '08:00 AM - 04:00 PM' },
    { type: 'Evening Shift', date: '2024-05-21', time: '04:00 PM - 12:00 AM' },
  ]);

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [filteredShifts, setFilteredShifts] = useState([]);

  useEffect(() => {
    populateYearAndMonth();
  }, []);

  const populateYearAndMonth = () => {
    // Populate years from 2020 to the current year
    let years = [];
    for (let i = 2020; i <= new Date().getFullYear(); i++) {
      years.push(i);
    }
    return years;
  };

  const showShiftsForMonth = (year, month) => {
    const filtered = historicalShifts.filter(shift => {
      const shiftDate = new Date(shift.date);
      return shiftDate.getFullYear() === year && shiftDate.getMonth() + 1 === month;
    });
    setFilteredShifts(filtered.length ? filtered : null);
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
    <section id="container-shift-section">
      <div id="container-shift">
        <h1 id="shift-heading-main">Employee Shift Management</h1>

        <h2 id="shift-heading-current">Current Shifts</h2>
        <table id="shift-table">
          <thead>
            <tr>
              <th>Shift Type</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {currentShifts.map((shift, index) => (
              <tr key={index}>
                <td>{shift.type}</td>
                <td>{shift.date}</td>
                <td>{shift.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 id="shift-heading-past">Show Past Shifts</h2>
        <div id="shift-filters">
          <select
            id="shift-year-select"
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            {populateYearAndMonth().map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            id="shift-month-select"
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <button id="shift-show-all-button" onClick={() => showShiftsForMonth(year, month)}>
            Show All Shifts
          </button>
        </div>

        <h3 id="shift-heading-history">Shift History</h3>
        <table id="shift-history-table">
          <thead>
            <tr>
              <th>Shift Type</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredShifts ? (
              filteredShifts.map((shift, index) => (
                <tr key={index}>
                  <td>{shift.type}</td>
                  <td>{shift.date}</td>
                  <td>{shift.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: 'center' }}>
                  No shifts found for this month.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
    </div>
    </div>
  );
};

export default ShiftManagement;
