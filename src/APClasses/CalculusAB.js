import { Link } from 'react-router-dom';
export default function CalculusAB() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Calculus AB</h1>
        <h2>Prerequisites:</h2>
        <p>Honors Precalculus</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Calculus AB is a course designed by the College Board Advanced Placement Program and taught according to the standards
set forth by the College Board. Topics in AP Calculus AB include, but are not limited to, functions, graphs, and limits; derivatives,
integrals, and their applications; the Fundamental Theorem of Calculus; anti-differentiation techniques and applications; and
numerical approximations to definite integrals. This course incorporates extensive use of technology." </p>
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