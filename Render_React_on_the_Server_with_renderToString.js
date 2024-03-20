import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello, World!");

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}