import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import MainRoutes from './Router/MainRoutes';

function App() {
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
