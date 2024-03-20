import React, { useState } from 'react';

function App() {
  const [visibility, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(prevVisibility => !prevVisibility);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Click Me</button>
      {visibility && <h1>Now you see me!</h1>}
    </div>
  );
}