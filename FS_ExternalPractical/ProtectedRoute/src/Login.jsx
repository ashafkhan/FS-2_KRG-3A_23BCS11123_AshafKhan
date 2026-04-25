import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard');
  };

  return (
    <div className="page-container fade-in">
      <div className="glass-card">
        <h1>Login</h1>
        <p className="status">
          Status: {isAuthenticated ? <span className="text-success">Authenticated</span> : <span className="text-error">Not Authenticated</span>}
        </p>
        <div className="button-group">
          {!isAuthenticated ? (
            <button className="btn-primary pulse" onClick={handleLogin}>Log In</button>
          ) : (
            <button className="btn-secondary" onClick={logout}>Log Out</button>
          )}
          <button className="btn-outline" onClick={() => navigate('/dashboard')}>
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
