<<<<<<< Updated upstream
import React from 'react';
import './App.css';
=======
import './App.scss';
>>>>>>> Stashed changes
import { AdminShell } from './app/admin/AdminShell';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard/Informationboard';

function App() {
  return (
    <div className="App">
        <AdminShell/>
    <main>
<<<<<<< Updated upstream
     <div className = "gridApp"><Informationboard/></div>
=======

      <Informationboard/>
>>>>>>> Stashed changes
      <SlideShowShell slides = {defaultSlides}/>
    </main>
    
  

    </div>
  );
}
export default App;
