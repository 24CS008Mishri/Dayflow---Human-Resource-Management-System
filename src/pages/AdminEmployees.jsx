import React, { useState } from 'react';
import '../styles/AdminFeatures.css';

const AdminEmployees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@company.com',
      employeeId: 'EMP001',
      role: 'Developer',
      department: 'Engineering',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@company.com',
      employeeId: 'EMP002',
      role: 'Designer',
      department: 'Design',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@company.com',
      employeeId: 'EMP003',
      role: 'Manager',
      department: 'Management',
      status: 'Active',
    },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const handleSelectEmployee = (emp) => {
    setSelectedEmployee(emp);
    setEditData(emp);
  };

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveChanges = () => {
    setEmployees(
      employees.map((emp) => (emp.id === editData.id ? editData : emp))
    );
    setEditMode(false);
  };

  return (
    <div className="admin-features-container">
      <h1>Employee Management</h1>

      {!selectedEmployee ? (
        <div className="employees-list">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Employee ID</th>
                <th>Email</th>
                <th>Department</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.employeeId}</td>
                  <td>{emp.email}</td>
                  <td>{emp.department}</td>
                  <td>
                    <span className="status-badge" style={{ backgroundColor: '#10b981' }}>
                      {emp.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="review-btn"
                      onClick={() => handleSelectEmployee(emp)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="employee-detail">
          <button className="back-btn" onClick={() => setSelectedEmployee(null)}>
            ← Back
          </button>

          <div className="detail-card">
            <h2>{selectedEmployee.name}</h2>

            {!editMode ? (
              <>
                <div className="detail-info">
                  <div className="info-row">
                    <span className="label">Employee ID:</span>
                    <span>{selectedEmployee.employeeId}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Email:</span>
                    <span>{selectedEmployee.email}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Role:</span>
                    <span>{selectedEmployee.role}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Department:</span>
                    <span>{selectedEmployee.department}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Status:</span>
                    <span>{selectedEmployee.status}</span>
                  </div>
                </div>

                <button className="edit-btn" onClick={() => setEditMode(true)}>
                  Edit Details
                </button>
              </>
            ) : (
              <>
                <div className="edit-form">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => handleEditChange('name', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleEditChange('email', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Role</label>
                    <input
                      type="text"
                      value={editData.role}
                      onChange={(e) => handleEditChange('role', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Department</label>
                    <input
                      type="text"
                      value={editData.department}
                      onChange={(e) => handleEditChange('department', e.target.value)}
                    />
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="approve-btn" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                  <button
                    className="reject-btn"
                    onClick={() => {
                      setEditMode(false);
                      setEditData(selectedEmployee);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEmployees;
