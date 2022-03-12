import { Link } from 'react-router-dom';
export default function Psychology() {
    return (
  
         <main style={{ padding: "1rem 2" }}>
        <h1>Psychology</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This one-semester elective course is a study of the science of behavior and mental processes. Students will examine the full scope
of psychology, including its historical framework, methodologies, human development, sensation, perception, personality
development, cognition, learning, biological foundations, mental health, and social psychology. Coursework will include analysis
of contemporary perspectives in psychology, application of critical methods of inquiry, conflict resolution, and performancebased assessments utilizing problem-solving or decision-making processes."</p>
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