import React from 'react';
import './App.css';
import { AdminShell } from './app/admin/AdminShell';
import logo from './logo.svg';
import defaultSlides from "./app/slideShow/sites-slide"
import Title, {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard';

function App() {
  return (
    <div className="App">
      {/* <AdminShell /> */}
      <Title/>
      <main>
      <SlideShowShell slides = {defaultSlides}/>
      <Informationboard/>
      
    </main>
    
   

    </div>
  );
}

export default App;
