import React, { useState } from 'react';

const inputStyle = {
  width: 235,
  margin: 5
};

function CheckUserAge() {
  const [userAge, setUserAge] = useState('');
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setUserAge('');
  };

  const submit = () => {
    setUserAge(input);
  };

  const buttonOne = <button onClick={submit}>Submit</button>;
  const buttonTwo = <button>You May Enter</button>;
  const buttonThree = <button>You Shall Not Pass</button>;

  return (
    <div>
      <h3>Enter Your Age to Continue</h3>
      <input
        style={inputStyle}
        type="number"
        value={input}
        onChange={handleChange}
      />
      <br />
      {userAge === '' ? buttonOne : userAge >= 18 ? buttonTwo : buttonThree}
    </div>
  );
}