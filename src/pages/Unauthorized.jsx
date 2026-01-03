import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Auth.css';

const Unauthorized = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Access Denied</h2>
        <p>You do not have permission to access this page.</p>
        <Link to="/dashboard" className="submit-btn" style={{ display: 'block', textAlign: 'center' }}>
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
