import React, { Component } from "react";
import './App.scss';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard/Informationboard';
<<<<<<< HEAD

=======
//import { Button } from 'react-bootstrap';
//import Navigation from './app/admin/navbar';
//import Routes from "./app/admin/Routes"
<<<<<<< HEAD
import AdminShell from "./app/admin/AdminShell";
>>>>>>> Lagt til bruk av Facebook API
=======
import {AdminShell} from "./app/admin/AdminShell";


>>>>>>> update admin

function App() {
  return (
    <div className="App">
       
    <main>  
       <AdminShell/>
      {/* <Informationboard/>
      <SlideShowShell slides = {defaultSlides}/> */ }

    </main>
    </div>
  );
}
export default App;


