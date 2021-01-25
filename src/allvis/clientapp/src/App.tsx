import React from 'react';
import './App.css';
import { AdminShell } from './app/admin/AdminShell';
import { Informationboard } from './app/slideShow/Informationboard/InformationboardShell';
import { SlideShowShell } from './app/slideShow/SlideShowShell';
import 'bootstrap/dist/css/bootstrap.min.css'
import "weather-icons/css/weather-icons.css"

function App() {
  return (
    <div className="App">
      <Informationboard />
    </div>
  );
}

export default App;
