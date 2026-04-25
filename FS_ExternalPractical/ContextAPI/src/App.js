import React from 'react';
import { UserProvider } from './UserContext';
import DashboardLayout from './DashboardLayout';
import ContentArea from './ContentArea';
import Profile from './Profile';

// Main App component
const App = () => {
  return (
    <UserProvider>
      <DashboardLayout>
        <ContentArea>
          <Profile />
        </ContentArea>
      </DashboardLayout>
    </UserProvider>
  );
};

export default App;
