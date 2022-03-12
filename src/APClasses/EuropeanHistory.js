import { Link } from 'react-router-dom';
export default function EuropeanHistory() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>European History</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This European History course is taught at the college-level and is for students who are prepared to take college-level work. The
goal of the course is to provide a basic narrative of events and movements in Europe from 1450 to present. This will include the
period from the High Renaissance to the recent past. In addition, the course will develop an understanding of some of the principal
themes in modern European History, an ability to analyze historical evidence, and an ability to express that understanding and
analysis in writing. A college text will be utilized, and the emphasis is placed upon critical thinking, independent study, and
research." </p>
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