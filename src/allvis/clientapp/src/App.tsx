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
<<<<<<< HEAD
      <Informationboard/>
      <SlideShowShell slides = {defaultSlides}/> 
=======
        <Informationboard/>
        <SlideShowShell slides = {defaultSlides}/>
>>>>>>> 8c869efc0c8b0d6d2d44d4331ff4ade30754641f
      </main>
    </div>
  );
}
export default App;


