import React from 'react';
import './App.css';
import { AdminShell } from './app/admin/AdminShell';
import logo from './logo.svg';
import defaultSlides from "./app/slideShow/sites-slide"
import Title, {SlideShowShell} from "./app/slideShow/SlideShowShell"

function App() {
  return (
    <div className="App">
      {/* <AdminShell /> */}
      <Title/>
      <main>
      <SlideShowShell slides = {defaultSlides}/>
      
    </main>
    
   

    </div>
  );
}

export default App;