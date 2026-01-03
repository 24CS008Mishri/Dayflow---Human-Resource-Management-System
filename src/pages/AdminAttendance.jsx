import React, { useState } from 'react';
import '../styles/AdminFeatures.css';

const AdminAttendance = () => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', date: '2024-01-03', status: 'Present', checkIn: '09:00 AM', checkOut: '05:30 PM' },
    { id: 2, name: 'Jane Smith', date: '2024-01-03', status: 'Absent', checkIn: '-', checkOut: '-' },
    { id: 3, name: 'Bob Johnson', date: '2024-01-03', status: 'Half-day', checkIn: '09:15 AM', checkOut: '02:00 PM' },
  ]);

  const [filterDate, setFilterDate] = useState('2024-01-03');
  const [filterEmployee, setFilterEmployee] = useState('all');

  const filteredData = employees.filter(
    (emp) =>
      emp.date === filterDate && (filterEmployee === 'all' || emp.id.toString() === filterEmployee)
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return '#4caf50';
      case 'Absent':
        return '#f44336';
      case 'Half-day':
        return '#ff9800';
      default:
        return '#999';
    }
  };

  return (
    <div className="admin-features-container">
      <h1>Attendance Records</h1>

      <div className="filter-section">
        <div className="filter-group">
          <label>Date</label>
          <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        </div>

        <div className="filter-group">
          <label>Employee</label>
          <select value={filterEmployee} onChange={(e) => setFilterEmployee(e.target.value)}>
            <option value="all">All Employees</option>
            <option value="1">John Doe</option>
            <option value="2">Jane Smith</option>
            <option value="3">Bob Johnson</option>
          </select>
        </div>
      </div>

      <div className="records-table">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Date</th>
              <th>Status</th>
              <th>Check-In</th>
              <th>Check-Out</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((record) => (
              <tr key={`${record.id}-${record.date}`}>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(record.status) }}
                  >
                    {record.status}
                  </span>
                </td>
                <td>{record.checkIn}</td>
                <td>{record.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="attendance-summary">
        <h2>Summary for {filterDate}</h2>
        <div className="summary-cards">
          <div className="summary-card">
            <h3>Present</h3>
            <p className="count">{filteredData.filter((d) => d.status === 'Present').length}</p>
          </div>
          <div className="summary-card">
            <h3>Absent</h3>
            <p className="count">{filteredData.filter((d) => d.status === 'Absent').length}</p>
          </div>
          <div className="summary-card">
            <h3>Half-day</h3>
            <p className="count">{filteredData.filter((d) => d.status === 'Half-day').length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAttendance;
