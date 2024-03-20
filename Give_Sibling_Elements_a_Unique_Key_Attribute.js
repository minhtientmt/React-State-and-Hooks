import React from 'react';

function Frameworks() {
  const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];

  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {frontEndFrameworks.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}