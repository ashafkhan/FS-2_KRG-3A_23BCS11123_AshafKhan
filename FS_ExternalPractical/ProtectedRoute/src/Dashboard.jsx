import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="page-container fade-in">
      <div className="glass-card dashboard-card">
        <h1>Dashboard 🚀</h1>
        <p>Welcome to the protected dashboard area!</p>
        <div className="dashboard-stats">
          <div className="stat-box">
            <h3>Visits</h3>
            <p>1,024</p>
          </div>
          <div className="stat-box">
            <h3>Status</h3>
            <p className="text-success">Active</p>
          </div>
        </div>
        <button className="btn-secondary mt-4" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

export default Dashboard;
