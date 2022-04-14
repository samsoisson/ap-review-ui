import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function WorldHistory() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>World History</h1>
        <h2>Prerequisites:</h2>
        <p>None</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This World History course is taught at the college-level and is for students who are prepared to take college level work. The
purpose of the course is to develop an understanding of world history from c. 1200 to the present through analyzing historical
sources, making connections, and crafting historical arguments. The course highlights concepts such as humans and the
environment, cultural developments and interactions, governance, economic systems, social interactions and organizations, and
technology and innovation. This course emphasizes relevant factual knowledge with leading interpretive issues and types of
historical evidence. A college text will be utilized, and the emphasis is placed upon document-based questions and
compare/contrast essays."</p>
        <h2>Student reviews:</h2>
        <p>Class difficulty:</p>
        <p>Teacher rating:</p>
        <p>AP test score:</p>
        <p>Final grade in class:</p>
        <p>Hours of homework per night:</p>
        <h3><Link to="/classes">Back</Link></h3>
      </main>
   
<p></p><p></p><p></p>
      </header>
      </header>
    );
  }