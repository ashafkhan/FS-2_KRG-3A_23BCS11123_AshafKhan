import React from 'react';

// Intermediate component in the tree - doesnt need to know about or pass user context
const DashboardLayout = ({ children }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ marginBottom: '20px', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
        <h1>Dashboard</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
