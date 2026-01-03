import React, { useState } from 'react';
import '../styles/AdminFeatures.css';

const AdminPayroll = () => {
  const [employees] = useState([
    { id: 1, name: 'John Doe', baseSalary: 5000, allowances: 1000, deductions: 500, netSalary: 5500 },
    { id: 2, name: 'Jane Smith', baseSalary: 6000, allowances: 1500, deductions: 600, netSalary: 6900 },
    { id: 3, name: 'Bob Johnson', baseSalary: 5500, allowances: 1200, deductions: 550, netSalary: 6150 },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
    setEditData(employee);
  };

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const handleSaveChanges = () => {
    setEditMode(false);
    // TODO: Update via API
  };

  return (
    <div className="admin-features-container">
      <h1>Payroll Management</h1>

      {!selectedEmployee ? (
        <div className="payroll-list">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Base Salary</th>
                <th>Allowances</th>
                <th>Deductions</th>
                <th>Net Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>${emp.baseSalary}</td>
                  <td>${emp.allowances}</td>
                  <td>${emp.deductions}</td>
                  <td className="net-salary">${emp.netSalary}</td>
                  <td>
                    <button
                      className="review-btn"
                      onClick={() => handleSelectEmployee(emp)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="payroll-detail">
          <button className="back-btn" onClick={() => setSelectedEmployee(null)}>
            ← Back
          </button>

          <div className="detail-card">
            <h2>Payroll Details - {selectedEmployee.name}</h2>

            {!editMode ? (
              <>
                <div className="detail-info">
                  <div className="info-row">
                    <span className="label">Base Salary:</span>
                    <span>${selectedEmployee.baseSalary}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Allowances:</span>
                    <span>${selectedEmployee.allowances}</span>
                  </div>
                  <div className="info-row">
                    <span className="label">Deductions:</span>
                    <span>${selectedEmployee.deductions}</span>
                  </div>
                  <div className="info-row total">
                    <span className="label">Net Salary:</span>
                    <span>${selectedEmployee.netSalary}</span>
                  </div>
                </div>

                <button className="edit-btn" onClick={() => setEditMode(true)}>
                  Edit Salary Structure
                </button>
              </>
            ) : (
              <>
                <div className="edit-form">
                  <div className="form-group">
                    <label>Base Salary</label>
                    <input
                      type="number"
                      value={editData.baseSalary}
                      onChange={(e) => handleEditChange('baseSalary', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Allowances</label>
                    <input
                      type="number"
                      value={editData.allowances}
                      onChange={(e) => handleEditChange('allowances', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Deductions</label>
                    <input
                      type="number"
                      value={editData.deductions}
                      onChange={(e) => handleEditChange('deductions', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Net Salary (Auto-calculated)</label>
                    <input
                      type="number"
                      value={editData.baseSalary + editData.allowances - editData.deductions}
                      disabled
                    />
                  </div>
                </div>

                <div className="action-buttons">
                  <button className="approve-btn" onClick={handleSaveChanges}>
                    Save Changes
                  </button>
                  <button className="reject-btn" onClick={() => setEditMode(false)}>
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

export default AdminPayroll;
