import { Link } from 'react-router-dom';
export default function MusicTheory() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Music Theory</h1>
        <h2>Prerequisites:</h2>
        <p>Music reading ability</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Music Theory is an advanced course for students who are considering a career in music. This course is a comprehensive
study of the materials of counterpoint and harmony. The study is made through listening and observation of the literature; lessons
in application include activities in musical writing and analysis. Advanced ear training, individual sight-reading, and the study
of musical harmony will be emphasized."</p>
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