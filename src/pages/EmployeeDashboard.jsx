import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Dashboard.css';

const EmployeeDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name}!</h1>
      <p className="subtitle">Your personal HR portal</p>

      <div className="quick-access-cards">
        <Link to="/profile" className="card">
          <div className="card-icon">👤</div>
          <h3>Profile</h3>
          <p>View and edit your profile</p>
        </Link>

        <Link to="/attendance" className="card">
          <div className="card-icon">📋</div>
          <h3>Attendance</h3>
          <p>Track your attendance</p>
        </Link>

        <Link to="/leave" className="card">
          <div className="card-icon">📅</div>
          <h3>Leave Requests</h3>
          <p>Manage your time off</p>
        </Link>

        <Link to="/payroll" className="card">
          <div className="card-icon">💰</div>
          <h3>Payroll</h3>
          <p>View salary details</p>
        </Link>
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <p className="placeholder">No recent activity</p>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
