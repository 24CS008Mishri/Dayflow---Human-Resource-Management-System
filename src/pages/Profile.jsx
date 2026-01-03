import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    jobTitle: 'Developer',
    department: 'Engineering',
    joiningDate: '2023-01-15',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Update profile via API
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-pic">👤</div>
          <div className="profile-basic">
            <h1>{profileData.name}</h1>
            <p>{profileData.jobTitle}</p>
            <p className="department">{profileData.department}</p>
          </div>
        </div>

        {!isEditing ? (
          <>
            <div className="profile-details">
              <div className="detail-section">
                <h3>Personal Information</h3>
                <div className="detail-row">
                  <span className="label">Email:</span>
                  <span>{profileData.email}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Phone:</span>
                  <span>{profileData.phone || 'Not provided'}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Address:</span>
                  <span>{profileData.address || 'Not provided'}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>Job Details</h3>
                <div className="detail-row">
                  <span className="label">Job Title:</span>
                  <span>{profileData.jobTitle}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Department:</span>
                  <span>{profileData.department}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Joining Date:</span>
                  <span>{profileData.joiningDate}</span>
                </div>
              </div>

              <div className="detail-section">
                <h3>Salary Structure</h3>
                <div className="salary-card">
                  <p>Base Salary: $5,000/month</p>
                  <p>Allowances: $1,000/month</p>
                </div>
              </div>
            </div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={profileData.email} disabled />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={profileData.address}
                onChange={handleChange}
                placeholder="Your address"
              />
            </div>

            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Save Changes
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
