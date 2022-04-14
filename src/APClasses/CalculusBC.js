import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function CalculusBC() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>Calculus BC</h1>
        <h2>Prerequisites:</h2>
        <p>Calculus AB</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Calculus BC is a course designed by the College Board Advanced Placement Program and taught according to the standards
set forth by the College Board. AP Calculus BC is an extension of AP Calculus AB, rather than an enhancement; common topics
require a similar depth of understanding. In addition to the topics in AP Calculus AB, topics in AP Calculus BC will include, but
are not limited to, parametric, polar, and vector functions, their derivatives, integrals, and applications; differential equations;
additional antiderivative techniques; improper integrals; and sequences and series, and their approximations. This course
incorporates extensive use of technology."</p>
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