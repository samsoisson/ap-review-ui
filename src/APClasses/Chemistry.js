import { Link } from 'react-router-dom';
export default function Chemistry() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Chemistry</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <p>Biology, Chemistry, and Algebra II</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Advanced Placement Chemistry (AP/GT) offers students advanced study in the concepts of chemistry. Laboratory techniques
are developed to further the student’s ability to pursue a career in an engineering or chemical-related field. Advanced laboratory
investigations of atomic theory, properties of matter, chemical reactions, kinetics, and equilibrium are presented."</p>
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