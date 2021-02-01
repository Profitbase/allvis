import React from 'react';
import './App.css';
import { AdminShell } from './app/admin/AdminShell';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import Title, { Informationboard } from './app/slideShow/Informationboard/Informationboard';

function App() {
  return (
    <div className="App">
      {/* <AdminShell /> */}
    <main>
      <Title/>
      <Informationboard/>
      <SlideShowShell slides = {defaultSlides}/>
    </main>
    
   

    </div>
  );
}
export default App;
