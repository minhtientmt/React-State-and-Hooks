import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('freeCodeCamp');

  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
}