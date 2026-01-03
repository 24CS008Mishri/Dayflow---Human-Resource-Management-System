import React, { useState } from 'react';
import '../styles/Attendance.css';

const Attendance = () => {
  const [viewType, setViewType] = useState('daily');
  const [attendanceData] = useState([
    { date: '2024-01-03', status: 'Present', checkIn: '09:00 AM', checkOut: '05:30 PM' },
    { date: '2024-01-02', status: 'Present', checkIn: '09:15 AM', checkOut: '05:45 PM' },
    { date: '2024-01-01', status: 'Leave', checkIn: '-', checkOut: '-' },
    { date: '2023-12-29', status: 'Present', checkIn: '09:00 AM', checkOut: '05:30 PM' },
    { date: '2023-12-28', status: 'Half-day', checkIn: '09:00 AM', checkOut: '02:00 PM' },
    { date: '2023-12-27', status: 'Absent', checkIn: '-', checkOut: '-' },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Present':
        return '#4caf50';
      case 'Absent':
        return '#f44336';
      case 'Half-day':
        return '#ff9800';
      case 'Leave':
        return '#2196f3';
      default:
        return '#999';
    }
  };

  return (
    <div className="attendance-container">
      <h1>Attendance Tracking</h1>

      <div className="view-toggle">
        <button
          className={viewType === 'daily' ? 'active' : ''}
          onClick={() => setViewType('daily')}
        >
          Daily View
        </button>
        <button
          className={viewType === 'weekly' ? 'active' : ''}
          onClick={() => setViewType('weekly')}
        >
          Weekly View
        </button>
      </div>

      <div className="attendance-card">
        <h2>January 2024 - {viewType === 'daily' ? 'Daily' : 'Weekly'}</h2>

        <div className="attendance-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Check-In</th>
                <th>Check-Out</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((record, index) => (
                <tr key={index}>
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
          <div className="summary-item">
            <span>Total Present:</span>
            <strong>3</strong>
          </div>
          <div className="summary-item">
            <span>Total Absent:</span>
            <strong>1</strong>
          </div>
          <div className="summary-item">
            <span>Half Days:</span>
            <strong>1</strong>
          </div>
          <div className="summary-item">
            <span>On Leave:</span>
            <strong>1</strong>
          </div>
        </div>

        <div className="checkin-section">
          <h3>Today's Check-In/Check-Out</h3>
          <div className="checkin-buttons">
            <button className="checkin-btn primary">Check-In</button>
            <button className="checkin-btn secondary">Check-Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
