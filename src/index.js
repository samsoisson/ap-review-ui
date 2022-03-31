import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Classes from './Classes';
import Capstone from './APClasses/Capstone';
import MusicTheory from './APClasses/MusicTheory';
import EnglishLanguage from './APClasses/EnglishLanguage';
import EnglishLiterature from './APClasses/EnglishLiterature';
import EuropeanHistory from './APClasses/EuropeanHistory';
import HumanGeography from './APClasses/HumanGeography';
import Macroeconomics from './APClasses/Macroeconomics';
import Microeconomics from './APClasses/Microeconomics';
import Psychology from './APClasses/Psychology';
import USGovernment from './APClasses/USGovernment';
import USHistory from './APClasses/USHistory';
import WorldHistory from './APClasses/WorldHistory';
import CalculusAB from './APClasses/CalculusAB';
import CalculusBC from './APClasses/CalculusBC';
import ComputerScienceA from './APClasses/ComputerScienceA';
import ComputerSciencePrinciples from './APClasses/ComputerSciencePrinciples';
import Statistics from './APClasses/Statistics';
import Biology from './APClasses/Biology';
import Chemistry from './APClasses/Chemistry';
import EnvironmentalScience from './APClasses/EnvironmentalScience';
import Physics1 from './APClasses/Physics1';
import Physics2 from './APClasses/Physics2';
import PhysicsC from './APClasses/PhysicsC';
import French from './APClasses/French';
import German from './APClasses/German';
import Latin from './APClasses/Latin';
import Spanish from './APClasses/Spanish';
import Chinese from './APClasses/Chinese';
import NewClass from './NewClass.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="classes" element={<Classes />} />
      <Route path="classes/capstone" element={<Capstone />} />
      <Route path="classes/chinese" element={<Chinese />} />
      <Route path="classes/french" element={<French />} />
      <Route path="classes/german" element={<German />} />
      <Route path="classes/latin" element={<Latin />} />
      <Route path="classes/spanish" element={<Spanish />} />
      <Route path="classes/chemistry" element={<Chemistry />} />
      <Route path="classes/biology" element={<Biology />} /> 
      <Route path="classes/music-theory" element={<MusicTheory />} />
      <Route path="classes/english-lit" element={<EnglishLiterature />} />
      <Route path="classes/english-lang" element={<EnglishLanguage />} />
      <Route path="classes/us-government" element={<USGovernment />} />
      <Route path="classes/european-history" element={<EuropeanHistory />} />
      <Route path="classes/human-geo" element={<HumanGeography />} />
      <Route path="classes/psych" element={<Psychology />} />
      <Route path="classes/macro" element={<Macroeconomics />} />
      <Route path="classes/micro" element={<Microeconomics />} />
      <Route path="classes/ush" element={<USHistory />} />
      <Route path="classes/world" element={<WorldHistory />} />
      <Route path="classes/calc-ab" element={<CalculusAB />} />
      <Route path="classes/calc-bc" element={<CalculusBC />} />
      <Route path="classes/stats" element={<Statistics />} />
      <Route path="classes/environmental" element={<EnvironmentalScience />} />
      <Route path="classes/phys1" element={<Physics1 />} />
      <Route path="classes/phys2" element={<Physics2 />} />
      <Route path="classes/physc" element={<PhysicsC />} />
      <Route path="classes/csa" element={<ComputerScienceA />} />
      <Route path="classes/csp" element={<ComputerSciencePrinciples />} />
      <Route path="new-class" element={<NewClass />}/>

      
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
