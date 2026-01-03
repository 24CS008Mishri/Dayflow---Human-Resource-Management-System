import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const API_URL = 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser && token) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        // Invalid JSON in localStorage
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, [token]);

  const signup = async (employeeId, email, password, role) => {
    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employeeId,
          email,
          password,
          role,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const data = await response.json();
      const newUser = {
        id: data.user.id,
        employeeId: data.user.employeeId,
        email: data.user.email,
        role: data.user.role,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(newUser));
      setToken(data.token);
      setUser(newUser);

      return newUser;
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const signin = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      const mockUser = {
        id: data.user.id,
        employeeId: data.user.employeeId || 'EMP001',
        email: data.user.email,
        name: email.split('@')[0],
        role: data.user.role,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setToken(data.token);
      setUser(mockUser);

      return mockUser;
    } catch (error) {
      console.error('Signin error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  const value = {
    user,
    token,
    loading,
    signin,
    signup,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
