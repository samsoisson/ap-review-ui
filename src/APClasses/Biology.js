import { Link } from 'react-router-dom';
export default function Biology() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Biology</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <p>Biology and Chemistry</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Advanced Placement Biology (AP/GT) offers students advanced study in the concepts of biology. Laboratory techniques are
developed to further the student’s ability to pursue a career in a biologically related field. Advanced laboratory investigations of
chemical reactions that occur in organisms (e.g., enzymes, Krebs cycle, protein synthesis, cell replication and specialization) are
presented. Biological systems of plants and animals are investigated. Animal dissection is a required part of the curriculum in
this course."</p>
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