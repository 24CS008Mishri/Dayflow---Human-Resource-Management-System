import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const AdminDashboard = () => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', email: 'john@company.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@company.com', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@company.com', role: 'Manager' },
  ]);

  return (
    <div className="dashboard-container admin">
      <h1>Admin Dashboard - Dayflow HRMS</h1>

      <div className="admin-grid">
        <div className="admin-card">
          <h3>Employee Management</h3>
          <Link to="/admin/employees" className="btn">
            Manage Employees →
          </Link>
        </div>

        <div className="admin-card">
          <h3>Attendance Records</h3>
          <Link to="/admin/attendance" className="btn">
            View Records →
          </Link>
        </div>

        <div className="admin-card">
          <h3>Leave Approvals</h3>
          <Link to="/admin/leave-approvals" className="btn">
            Review Requests →
          </Link>
        </div>

        <div className="admin-card">
          <h3>Payroll Management</h3>
          <Link to="/admin/payroll" className="btn">
            Manage Payroll →
          </Link>
        </div>
      </div>

      <div className="employee-list-section">
        <h2>Employee List</h2>
        <div className="employees-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>
                    <button onClick={() => setSelectedEmployee(emp)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
