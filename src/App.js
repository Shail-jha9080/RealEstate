
import './App.css';
import  Companies from './Component/Companies/companies';
import Contact from './Component/Contact/Contact';
import GetStarted from './Component/GetStarted/GetStarted';
import Extra from './Component/Header/Extra/Extra';
import Header from "./Component/Header/Header";
import Residencies from './Component/Residencies/Residencies';
import Value from './Component/Value/Value';
import Footer from './Component/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Extra/>
    </div>
    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
    </div>
  );
}

export default App;
