import { Link } from 'react-router-dom';
export default function PhysicsC() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Physics C: Calculus-based</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>Calculus concurrent enrollment or Calculus credit</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"The Advanced Placement Physics C (AP/GT) course is the first part of the college sequence that serves as the foundation in
physics for students majoring in the physical sciences or engineering. An equal emphasis in the course is on mechanics and on
electricity and magnetism, with the AP test separated for administration and grading into those two areas. Strong emphasis is
placed on solving challenging problems, some requiring calculus."</p>
        <h2>Student reviews:</h2>
        <p>Class difficulty:</p>
        <p>Teacher rating:</p>
        <p>AP test score:</p>
        <p>Final grade in class:</p>
        <p>Hours of homework per night:</p>
        <h3><Link to="/classes">Back</Link></h3>
      </main>
   

    );
  }