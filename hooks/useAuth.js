//hooks/useAuth.js

import { useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    console.log('Attempting login with:', { username, password }); // Debug log

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setIsLoggedIn(true);
        localStorage.setItem('token', data.token); // Store token locally
        console.log('Login successful:', data); // Debug log
        return { success: true, token: data.token };
      } else {
        const error = await response.json();
        console.error('Login failed:', error.message);
        return { success: false, message: error.message };
      }
    } catch (error) {
      console.error('Error logging in:', error); // Debug log
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const register = async (username, password) => {
    console.log('Attempting registration with:', { username, password }); // Debug log

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('User registered successfully');
        return { success: true, message: 'Registration successful!' };
      } else {
        const error = await response.json();
        console.error('Registration failed:', error.message);
        return { success: false, message: error.message };
      }
    } catch (error) {
      console.error('Error registering user:', error); // Debug log
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    localStorage.removeItem('token'); // Clear token from storage
    console.log('User logged out successfully'); // Debug log
  };

  return { isLoggedIn, login, register, logout, token };
};
