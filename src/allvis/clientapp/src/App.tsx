import React, { Component } from "react";
import './App.scss';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard/Informationboard';


function App() {
  return (
    <div className="App">
       
    <main>  
    {  /* <AdminShell/>*/ } 
     <Informationboard/>
      <SlideShowShell slides = {defaultSlides}/> 

    </main>
    </div>
  );
}
export default App;


