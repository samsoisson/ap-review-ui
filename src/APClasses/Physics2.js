import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function Physics2() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>Physics 2: Algebra-based</h1>
        <h2>Prerequisites:</h2>
        <p>Biology, Physics, and concurrent enrollment in Precalculus or Precalculus credit</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Advanced Placement Physics 2 (AP/GT) offers advanced study in the concepts of physics and is equivalent to a second-semester
college course in algebra-based physics taught over a full year. The course covers fluid mechanics; thermodynamics; electricity
and magnetism; optics; atomic and nuclear physics."</p>
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