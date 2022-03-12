import { Link } from 'react-router-dom';
export default function Spanish() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Spanish</h1>
        <h2>Prerequisites:</h2>
        <p>Spanish III</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"By using the four basic skills acquired in earlier courses, students in this class closely examine the Spanish language grammatical
structure and vocabulary. Readings from Spanish literature provide opportunities for cognitive thinking and group discussion,
and students develop their abilities in both oral and written expression. The focus in this course is a concentration on the use of
formal literary style and idiomatic terminology."</p>
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