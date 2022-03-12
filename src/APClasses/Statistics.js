import { Link } from 'react-router-dom';
export default function Statistics() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Statistics</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>Algebra I, Geometry, or Algebra II</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Statistics is a course designed by the College Board Advanced Placement Program and taught according to the standards set
forth by the College Board. Topics in AP Statistics are divided into four major themes: exploratory analysis, planning a study,
probability, and statistical inference. Exploratory analysis of data makes use of graphical and numerical techniques to study
patterns and departures from patterns. Planning a study involves collecting data according to a well-developed plan, in order to
obtain valid information on a conjecture. Probability is the tool used for anticipating what the distribution of data should look
like under a given model. Statistical inference guides the selection of appropriate models. This course incorporates extensive use
of technology."</p>
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