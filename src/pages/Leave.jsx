import React, { useState } from 'react';
import '../styles/Leave.css';

const Leave = () => {
  const [leaveRequests] = useState([
    {
      id: 1,
      type: 'Paid Leave',
      startDate: '2024-01-15',
      endDate: '2024-01-17',
      reason: 'Personal work',
      status: 'Pending',
      remarks: 'Awaiting approval',
    },
    {
      id: 2,
      type: 'Sick Leave',
      startDate: '2024-01-10',
      endDate: '2024-01-10',
      reason: 'Medical appointment',
      status: 'Approved',
      remarks: 'Approved by HR',
    },
    {
      id: 3,
      type: 'Paid Leave',
      startDate: '2024-01-05',
      endDate: '2024-01-08',
      reason: 'Vacation',
      status: 'Rejected',
      remarks: 'Not approved',
    },
  ]);

  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    leaveType: 'paid',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit leave request via API
    setIsApplying(false);
    setFormData({ leaveType: 'paid', startDate: '', endDate: '', reason: '' });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return '#4caf50';
      case 'Pending':
        return '#ff9800';
      case 'Rejected':
        return '#f44336';
      default:
        return '#999';
    }
  };

  return (
    <div className="leave-container">
      <h1>Leave & Time-Off Management</h1>

      <div className="leave-summary">
        <div className="summary-card">
          <h3>Paid Leave</h3>
          <p className="count">12 / 15</p>
          <p className="remaining">3 remaining</p>
        </div>
        <div className="summary-card">
          <h3>Sick Leave</h3>
          <p className="count">5 / 10</p>
          <p className="remaining">5 remaining</p>
        </div>
        <div className="summary-card">
          <h3>Unpaid Leave</h3>
          <p className="count">0 / Unlimited</p>
          <p className="remaining">Available</p>
        </div>
      </div>

      {!isApplying ? (
        <>
          <div className="apply-leave-btn-container">
            <button className="apply-btn" onClick={() => setIsApplying(true)}>
              + Apply for Leave
            </button>
          </div>

          <div className="leave-requests">
            <h2>Your Leave Requests</h2>
            <div className="requests-list">
              {leaveRequests.map((request) => (
                <div key={request.id} className="request-card">
                  <div className="request-header">
                    <h3>{request.type}</h3>
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(request.status) }}
                    >
                      {request.status}
                    </span>
                  </div>
                  <div className="request-details">
                    <p>
                      <strong>Duration:</strong> {request.startDate} to {request.endDate}
                    </p>
                    <p>
                      <strong>Reason:</strong> {request.reason}
                    </p>
                    <p>
                      <strong>Remarks:</strong> {request.remarks}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="apply-leave-form">
          <h2>Apply for Leave</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Leave Type</label>
              <select name="leaveType" value={formData.leaveType} onChange={handleChange}>
                <option value="paid">Paid Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="unpaid">Unpaid Leave</option>
              </select>
            </div>

            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Reason</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Please provide a reason for your leave"
                required
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Submit Request
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setIsApplying(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Leave;
