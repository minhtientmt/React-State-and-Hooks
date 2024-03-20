import React from 'react';

function Results({ fiftyFifty }) {
  return (
    <h1>{fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>
  );
}