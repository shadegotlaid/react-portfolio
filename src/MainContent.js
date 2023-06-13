import React from 'react';
import './App.css';


function MainContent() {
  return (
    <div className="main-content">
      <div className="text-animation">
        <h1 className="hello-text">Hello world!</h1>
        <p className="intro-text">
          It's me! Kousha. A UX designer with a background in art and content. Creation is a
          passion of mine, and animation is my ambition. I have worked on many cases, all from UX
          to trailer production. Does it sound interesting? Good.
        </p>
      </div>
      <div className="image-container">
        <img className="retro-image" src="/Me.png" alt="Me" />
      </div>
    </div>
  );
}

export default MainContent;
