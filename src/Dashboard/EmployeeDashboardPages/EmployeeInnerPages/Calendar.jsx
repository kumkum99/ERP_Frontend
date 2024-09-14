import React, { useState, useEffect, useContext } from 'react';
import './PagesCSS.css';
import NavbarComponent from '../../../components/DashboardHeader/Nav';
import EmpSidebar from '../EmployeeSidebar'
import { GlobalSettingsContext } from "../../context/GlobalSettingsContext";

const Calendar = () => {
    const { darkMode, fontSize, fontColor } = useContext(GlobalSettingsContext);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  useEffect(() => {
    renderCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear, events]);

  const renderCalendar = (month, year) => {
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
    document.getElementById('calendar-month-year').textContent = `${months[month]} ${year}`;

    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        let cell = document.createElement('td');
        if (i === 0 && j < firstDay) {
          cell.appendChild(document.createTextNode(''));
        } else if (date > daysInMonth) {
          break;
        } else {
          let cellDate = `${year}-${month + 1}-${date}`;
          cell.appendChild(document.createTextNode(date));
          cell.setAttribute('data-date', cellDate);
          cell.addEventListener('click', () => handleCellClick(cellDate));

          let eventsForDate = events.filter(event => event.date === cellDate);
          eventsForDate.forEach(event => {
            let eventElement = document.createElement('div');
            eventElement.textContent = event.title;
            eventElement.classList.add('event');
            cell.appendChild(eventElement);
          });

          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }
  };

  const handleCellClick = (date) => {
    document.getElementById('event-modal').style.display = 'block';
    document.getElementById('calendar-event-date').value = date;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const date = document.getElementById('calendar-event-date').value;
    const title = document.getElementById('calendar-event-title').value;

    const newEvents = [...events, { date, title }];
    setEvents(newEvents);
    localStorage.setItem('events', JSON.stringify(newEvents));

    document.getElementById('event-modal').style.display = 'none';
    e.target.reset();
  };

  const closeModal = () => {
    document.getElementById('event-modal').style.display = 'none';
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
    <section id="calendar-section" className="calendar-section">
      <div id="calendar-container" className="calendar-container">
        <div id="calendar-header" className="calendar-header">
          <button id="prev-month" onClick={handlePrevMonth}>Previous</button>
          <h2 id="calendar-month-year"></h2>
          <button id="next-month" onClick={handleNextMonth}>Next</button>
        </div>
        <table id="calendar-table" className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody id="calendar-body"></tbody>
        </table>
      </div>

      <div id="event-modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Add Event</h2>
          <form id="calendar-event-form" onSubmit={handleFormSubmit}>
            <label htmlFor="calendar-event-date">Date:</label>
            <input type="text" id="calendar-event-date" name="calendar-event-date" readOnly />
            <label htmlFor="calendar-event-title">Event:</label>
            <input type="text" id="calendar-event-title" name="calendar-event-title" required />
            <button type="submit">Add Event</button>
          </form>
        </div>
      </div>
    </section>
    </div></div>
  );
};

export default Calendar;
