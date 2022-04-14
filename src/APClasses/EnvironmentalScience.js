import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function EnvironmentalScience() {
    return (
<header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

      
         <main style={{ padding: "1rem 2" }}>
        <h1>Environmental Science</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <p>Biology, Chemistry, and Algebra I</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Advanced Placement Environmental Science (AP/ GT), unlike many other introductory courses, is offered from a wide variety
of science disciplines including geology, biology, environmental systems, chemistry, and geography. The course provides the
student with the scientific principles, concepts, and methodologies required to understand the interrelationships of the natural
world, and to identify and analyze environmental problems both natural and human-made, to evaluate the relative risks associated
with these problems, and to examine alternative solutions for resolving and/or preventing them."</p>
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