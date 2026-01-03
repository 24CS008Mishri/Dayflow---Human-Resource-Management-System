import React, { useState } from 'react';
import '../styles/Payroll.css';

const Payroll = () => {
  const [payrollData] = useState([
    {
      month: 'January 2024',
      baseSalary: 5000,
      allowances: 1000,
      deductions: 500,
      netSalary: 5500,
      status: 'Processed',
    },
    {
      month: 'December 2023',
      baseSalary: 5000,
      allowances: 1000,
      deductions: 500,
      netSalary: 5500,
      status: 'Paid',
    },
    {
      month: 'November 2023',
      baseSalary: 5000,
      allowances: 1000,
      deductions: 500,
      netSalary: 5500,
      status: 'Paid',
    },
  ]);

  const [selectedPayroll, setSelectedPayroll] = useState(null);

  return (
    <div className="payroll-container">
      <h1>Payroll & Salary Management</h1>

      {!selectedPayroll ? (
        <>
          <div className="salary-overview">
            <div className="overview-card">
              <h3>Current Month Salary</h3>
              <p className="salary-amount">$5,500</p>
              <p className="salary-status">Processed</p>
            </div>
            <div className="overview-card">
              <h3>Annual Salary</h3>
              <p className="salary-amount">$66,000</p>
              <p className="salary-period">12 months</p>
            </div>
          </div>

          <div className="payroll-history">
            <h2>Payroll History</h2>
            <div className="payroll-table">
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Base Salary</th>
                    <th>Allowances</th>
                    <th>Deductions</th>
                    <th>Net Salary</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {payrollData.map((record, index) => (
                    <tr key={index}>
                      <td>{record.month}</td>
                      <td>${record.baseSalary}</td>
                      <td>${record.allowances}</td>
                      <td>${record.deductions}</td>
                      <td className="net-salary">${record.netSalary}</td>
                      <td>
                        <span className="status-badge">{record.status}</span>
                      </td>
                      <td>
                        <button onClick={() => setSelectedPayroll(record)}>
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className="payroll-details">
          <button className="back-btn" onClick={() => setSelectedPayroll(null)}>
            ← Back
          </button>

          <div className="detail-card">
            <h2>{selectedPayroll.month} - Payroll Slip</h2>

            <div className="detail-sections">
              <div className="section">
                <h3>Earnings</h3>
                <div className="detail-row">
                  <span>Base Salary</span>
                  <span>${selectedPayroll.baseSalary}</span>
                </div>
                <div className="detail-row">
                  <span>Allowances</span>
                  <span>${selectedPayroll.allowances}</span>
                </div>
              </div>

              <div className="section">
                <h3>Deductions</h3>
                <div className="detail-row">
                  <span>Tax & Other Deductions</span>
                  <span>${selectedPayroll.deductions}</span>
                </div>
              </div>

              <div className="section total">
                <h3>Net Salary</h3>
                <div className="detail-row">
                  <span className="total-label">Total Amount</span>
                  <span className="total-amount">${selectedPayroll.netSalary}</span>
                </div>
              </div>
            </div>

            <button className="download-btn">📥 Download Payroll Slip</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payroll;
