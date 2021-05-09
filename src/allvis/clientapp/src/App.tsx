import './App.scss';
import defaultSlides from "./app/slideShow/sites-slide"
import {SlideShowShell} from "./app/slideShow/SlideShowShell"
import { Informationboard } from './app/slideShow/Informationboard/Informationboard';
import {AdminShell} from "./app/admin/AdminShell";


function App() {
  return (
    <div className="App">
       
    <main>  
      {/*<AdminShell/> */}
      <Informationboard/>
      <SlideShowShell slides = {defaultSlides}/> 

    </main>
    </div>
  );
}
export default App;


