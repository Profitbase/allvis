import React from 'react';
import './App.scss';
import { AdminShell } from './app/admin/AdminShell';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard/Informationboard';

function App() {
  return (
    <div className="App">
       
    <main>   

      <Informationboard/>

      <SlideShowShell slides = {defaultSlides}/>
    </main>
    
    </div>
  );
}
export default App;
