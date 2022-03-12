import { Link } from 'react-router-dom';
export default function Latin() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Latin</h1>
        <h2>Prerequisites:</h2>
        <p>Latin III</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This course prepares students for the College Board Advanced Placement Latin exam covering Vergil’s Aeneid and
Caesar’s Gallic Wars."</p>
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