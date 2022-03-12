import { Link } from 'react-router-dom';
export default function EnglishLiterature() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>English Literature and Composition</h1>
        <h2>Prerequisites:</h2>
        <p>English II</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"In AP English IV, the focus is on the reading, analyzing, and writing about imaginative literature (fiction, poetry, drama) from
various time periods."</p>
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