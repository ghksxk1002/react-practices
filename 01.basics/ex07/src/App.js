import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import React from 'react';

// react API로 바뀌니까 import 해주어야 한다.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {`Hello React`}
        </a>
      </header>
    </div>
  );
}

export default App;
