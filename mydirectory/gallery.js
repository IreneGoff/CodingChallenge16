// src/Gallery.js
import React from 'react';
import Profile from './Profile';

function Gallery({ teamMembers }) {
  return (
    <div className="gallery">
      {teamMembers.map((member, index) => (
        <Profile key={index} {...member} />
      ))}
    </div>
  );
}

export default Gallery;
