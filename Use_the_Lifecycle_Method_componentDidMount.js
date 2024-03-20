import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [activeUsers, setActiveUsers] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setActiveUsers(1273);
    }, 2500);
  }, []);

  return (
    <div>
      <h1>Active Users: {activeUsers}</h1>
    </div>
  );
}