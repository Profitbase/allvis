import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AdminShell } from './app/admin/AdminShell';
import { SlideShowShell } from './app/slideShow/SlideShowShell';

function App() {
  return (
    <div className="App">
      <AdminShell />
      <SlideShowShell />
    </div>
  );
}

export default App;
