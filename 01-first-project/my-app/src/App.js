// import logo from './logo.svg';
import React, {Component} from "react";
import './App.css';

const App = () => {
  return (
      <div>
          <Header />
          <Technologies />
      </div>
  );
};

const Technologies = () => {
    return (
    <div>
        This is Technologies
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>
    </div>);
};

const Header = () => {
    return (
        <div className="Header">
            <div>This is Header</div>
        </div>
    );
};

export default App;
