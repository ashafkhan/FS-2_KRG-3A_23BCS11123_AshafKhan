import React, { createContext } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Mock values
export const mockUserValues = {
  username: 'Arjun',
  isLoggedIn: true,
};

// Provider component
export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={mockUserValues}>
      {children}
    </UserContext.Provider>
  );
};
