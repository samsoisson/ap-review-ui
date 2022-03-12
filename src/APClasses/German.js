import { Link } from 'react-router-dom';
export default function German() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>German</h1>
        <h2>Prerequisites:</h2>
        <p>German III</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"By using the four basic skills acquired in previous courses, students in this course refine their knowledge of grammatical structure
and vocabulary and develop the ability to express themselves both in spoken and written forms. Readings in German literature,
as well as in nonfiction articles from contemporary publications, provide students opportunities for cognitive thinking and group
discussion. AP German IV concentrates on the use of formal literary style and idiomatic terminology."</p>
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