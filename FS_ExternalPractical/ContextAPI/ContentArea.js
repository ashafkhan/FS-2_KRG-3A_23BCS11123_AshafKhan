import React from 'react';

// Another intermediate component - also doesnt need to handle user context
const ContentArea = ({ children }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

export default ContentArea;
