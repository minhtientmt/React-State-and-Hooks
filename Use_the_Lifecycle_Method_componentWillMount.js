import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    console.log('Component being mounted');
  }, []);

  return <div />;
}