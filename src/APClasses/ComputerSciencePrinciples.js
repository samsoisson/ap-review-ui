import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function ComputerSciencePrinciples() {
    return (
  
<header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>Computer Science Principles</h1>
        <h2>Prerequisites:</h2>
        <p>Algebra 1</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This course will introduce students to the creative aspects of programming, abstractions, algorithms, large data sets, the Internet,
cybersecurity concerns, and computing impacts. Computer Science Principles AP will give students the opportunity to use
technology to address real-world problems and build relevant solutions. Together, these aspects of the course make up a rigorous
and rich curriculum that aims to broaden participation in computer science. Upon completion of this course, students will be
prepared to take the College Board Advanced Placement Computer Science exam."</p>
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