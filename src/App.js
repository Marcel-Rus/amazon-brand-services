import React from 'react';
import TopBar from './components/TopBar.js';
import SecondaryBar from './components/SecondaryBar.js';

import './App.scss';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <SecondaryBar></SecondaryBar>
    </div>
  );
}

export default App;
