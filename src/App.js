import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">New feed</a>
      <a href="#">New messages</a>
    </div>
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
      </ul>
    </div>
  )
}

export default App;
