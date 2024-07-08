//U35549532

// src/App.js
import React from 'react';
import Gallery from './Gallery';

const teamMembers = [
  { name: 'Robert White', role: 'Developer', photo: 'robert.jpg' },
  { name: 'Kailey Spencer', role: 'Designer', photo: 'kailey.jpg' },
  { name: 'Richard Smith', role: 'Manager', photo: 'richard.jpg' },
];

function App() {
  return (
    <div className="App">
      <Header title="Team Profiles" />
      <Gallery teamMembers={teamMembers} />
    </div>
  );
}

export default App;
