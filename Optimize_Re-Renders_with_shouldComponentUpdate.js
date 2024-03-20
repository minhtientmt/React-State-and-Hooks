import React, { useEffect } from 'react';

function OnlyEvens(props) {
  useEffect(() => {
    console.log('Component re-rendered.');
  });

  return <h1>{props.value}</h1>;
}

export default OnlyEvens;

// Controller.js
import React, { useState } from 'react';
import OnlyEvens from './OnlyEvens';

function Controller() {
  const [value, setValue] = useState(0);

  const addValue = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <button onClick={addValue}>Add</button>
      <OnlyEvens value={value} />
    </div>
  );
}