import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function Physics1() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>Physics 1: Algebra-based</h1>
        <h2>Prerequisites:</h2>
        <p>Geometry, concurrent enrollment in Algebra II or Algebra II credit, and Biology</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Advanced Placement Physics 1 (AP/GT) offers advanced study in the concepts of physics and is the equivalent to a first-semester
college course in algebra-based physics, taught over a full year. Laboratory techniques are developed to further the student’s
ability to pursue a career in a science field. Advanced laboratory investigations of Newtonian mechanics; work, energy, and
power; mechanical waves and sound; and electrical circuits are presented."</p>
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