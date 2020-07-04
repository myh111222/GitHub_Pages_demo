import React from 'react';
import profileImage from './image/0.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} className="App-logo" alt="logo" />
        <p>
          你好！欢迎来到我的 React <br ></br>
          <h3>点击下方开始 ～</h3> 
        </p>
        <h1> My  React Pages </h1>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ma-yi-heng-486b7391/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn from Eric Ma
        </a>
      </header>
    </div>
  );
}

export default App;
