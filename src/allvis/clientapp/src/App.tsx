import React, { Component } from "react";
import './App.scss';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard/Informationboard';
import { Button } from 'react-bootstrap';
import Navigation from './app/admin/navbar';
import Routes from "./app/admin/Routes"
import AdminShell from "./app/admin/AdminShell";

function App() {
  return (
    <div className="App">
       
    <main>  
      <AdminShell/>

      {/* <Navigation />
      <Routes />
      <Informationboard/>
      <SlideShowShell slides = {defaultSlides}/> */}

    </main>
    </div>
  );
}
export default App;
