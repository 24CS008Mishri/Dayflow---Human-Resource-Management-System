import React, { useState } from 'react';
import '../styles/AdminFeatures.css';

const AdminLeaveApprovals = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      employeeName: 'John Doe',
      leaveType: 'Paid Leave',
      startDate: '2024-01-20',
      endDate: '2024-01-22',
      reason: 'Personal work',
      status: 'Pending',
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      leaveType: 'Sick Leave',
      startDate: '2024-01-15',
      endDate: '2024-01-15',
      reason: 'Medical appointment',
      status: 'Pending',
    },
    {
      id: 3,
      employeeName: 'Bob Johnson',
      leaveType: 'Paid Leave',
      startDate: '2024-01-10',
      endDate: '2024-01-12',
      reason: 'Vacation',
      status: 'Approved',
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [comment, setComment] = useState('');

  const handleApprove = (id) => {
    setLeaveRequests(
      leaveRequests.map((req) =>
        req.id === id ? { ...req, status: 'Approved' } : req
      )
    );
    setSelectedRequest(null);
    setComment('');
  };

  const handleReject = (id) => {
    setLeaveRequests(
      leaveRequests.map((req) =>
        req.id === id ? { ...req, status: 'Rejected' } : req
      )
    );
    setSelectedRequest(null);
    setComment('');
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
    <div className="admin-features-container">
      <h1>Leave Request Approvals</h1>

      {!selectedRequest ? (
        <div className="requests-list">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Leave Type</th>
                <th>Duration</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveRequests.map((request) => (
                <tr key={request.id} className={request.status === 'Pending' ? 'pending' : ''}>
                  <td>{request.employeeName}</td>
                  <td>{request.leaveType}</td>
                  <td>
                    {request.startDate} to {request.endDate}
                  </td>
                  <td>{request.reason}</td>
                  <td>
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(request.status) }}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td>
                    {request.status === 'Pending' && (
                      <button
                        className="review-btn"
                        onClick={() => setSelectedRequest(request)}
                      >
                        Review
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="request-detail">
          <button className="back-btn" onClick={() => setSelectedRequest(null)}>
            ← Back
          </button>

          <div className="detail-card">
            <h2>Leave Request - {selectedRequest.employeeName}</h2>

            <div className="detail-info">
              <div className="info-row">
                <span className="label">Leave Type:</span>
                <span>{selectedRequest.leaveType}</span>
              </div>
              <div className="info-row">
                <span className="label">Start Date:</span>
                <span>{selectedRequest.startDate}</span>
              </div>
              <div className="info-row">
                <span className="label">End Date:</span>
                <span>{selectedRequest.endDate}</span>
              </div>
              <div className="info-row">
                <span className="label">Reason:</span>
                <span>{selectedRequest.reason}</span>
              </div>
            </div>

            <div className="comment-section">
              <label>Add Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add your comments or remarks"
              />
            </div>

            <div className="action-buttons">
              <button
                className="approve-btn"
                onClick={() => handleApprove(selectedRequest.id)}
              >
                ✓ Approve
              </button>
              <button
                className="reject-btn"
                onClick={() => handleReject(selectedRequest.id)}
              >
                ✕ Reject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLeaveApprovals;
