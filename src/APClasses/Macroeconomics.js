import { Link } from 'react-router-dom';
import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function Macroeconomics() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>Macroeconomics</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>US History</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This is a one-semester college-level course for students who wish to take a challenging course in Macroeconomics. This course
emphasizes critical-thinking skills, logic, and substantial out-of-class independent study. The course focuses on aggregate
demand and supply, fiscal policy, monetary policy, and international trade.,. A college text will be utilized, and the emphasis
will be on applying economic models, data analysis, critical thinking, independent study & research."</p>
        <h2>Student reviews:</h2>
        <p>Class difficulty:</p>
        <p>Teacher rating:</p>
        <p>AP test score:</p>
        <p>Final grade in class:</p>
        <p>Hours of homework per night:</p>
        <h3><Link to="/classes">Back</Link></h3>
      </main>
   
      <p></p><p></p><p></p>
      </header>
      </header>
    );
  }