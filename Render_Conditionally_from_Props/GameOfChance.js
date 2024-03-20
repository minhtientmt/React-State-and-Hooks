import React, { useState } from 'react';
import Results from './Results';

function GameOfChance() {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const expression = Math.random() >= 0.5;

  return (
    <div>
      <button onClick={handleClick}>Play Again</button>
      <Results fiftyFifty={expression} />
      <p>{`Turn: ${counter}`}</p>
    </div>
  );
}