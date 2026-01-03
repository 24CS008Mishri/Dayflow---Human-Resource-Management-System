import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';

// Auth Pages
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

// Dashboard Pages
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Employee Feature Pages
import Profile from './pages/Profile';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Payroll from './pages/Payroll';

// Admin Feature Pages
import AdminLeaveApprovals from './pages/AdminLeaveApprovals';
import AdminAttendance from './pages/AdminAttendance';
import AdminPayroll from './pages/AdminPayroll';
import AdminEmployees from './pages/AdminEmployees';

// Error Pages
import Unauthorized from './pages/Unauthorized';

import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Employee Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardRouter />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/attendance"
            element={
              <PrivateRoute>
                <Attendance />
              </PrivateRoute>
            }
          />

          <Route
            path="/leave"
            element={
              <PrivateRoute>
                <Leave />
              </PrivateRoute>
            }
          />

          <Route
            path="/payroll"
            element={
              <PrivateRoute>
                <Payroll />
              </PrivateRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/employees"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminEmployees />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/attendance"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminAttendance />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/leave-approvals"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminLeaveApprovals />
              </PrivateRoute>
            }
          />

          <Route
            path="/admin/payroll"
            element={
              <PrivateRoute allowedRoles={['admin']}>
                <AdminPayroll />
              </PrivateRoute>
            }
          />

          {/* Error Routes */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

// Component to handle dashboard routing based on role
const DashboardRouter = () => {
  const { user } = useAuth();
  
  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }
  return <EmployeeDashboard />;
};

export default App;