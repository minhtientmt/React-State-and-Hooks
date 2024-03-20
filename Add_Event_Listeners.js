import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [message, setMessage] = useState('');

  const handleEnter = () => {
    setMessage((prevMessage) => prevMessage + 'You pressed the enter key! ');
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleEnter();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}