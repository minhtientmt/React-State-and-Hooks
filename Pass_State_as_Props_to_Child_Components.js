import React, { useState } from 'react';

function MyApp() {
  const [name, setName] = useState('CamperBot');

  return (
    <div>
      CamperBot
      <Navbar name={name} />
    </div>
  );
}

function Navbar(props) {
  return (
    <div>
      component above from state
      <h1>Hello, my name is: {props.name}</h1>
    </div>
  );
}