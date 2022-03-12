import logo from './logo.svg';
import './App.css';
import Button from './Button.js'
import { Link } from 'react-router-dom';
import Classes from "./Classes";
import Capstone from "./APClasses/Capstone";
function App() {
  return (
    <div className="App">
      <header className="App-header">     
      <p>
          CLHS AP Classes Review
        </p>
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
    <header className="App-desc">
          <p>
            Learn which courses are right for you!
          </p>          
    </header>
    <header className="App-buttons">   
{/* <Button/> */}
    </header>
    <Link to="/classes">Explore</Link>
    
    </div>    
  );
}
export default App;
