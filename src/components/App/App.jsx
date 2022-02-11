import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Main className="main" />
    </div>
  );
}

export default React.memo(App);
