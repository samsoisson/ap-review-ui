import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function USGovernment() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>US Government and Politics</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>US History</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This is a one-semester college-level course for students who wish to take a challenging course in U.S. Government and Politics.
The course covers the constitutional underpinnings of the United States government system, civil liberties and civil rights,
political culture and socialization, citizen participation and influence, plus political institutions and policy making. The course
includes interpreting classic and contemporary political writings, evaluating the impact of the media on voter perceptions,
campaign strategies, electoral outcomes and policy agenda development, and applying pertinent Supreme Court rulings to
enduring social and political issues in the United States. An emphasis will be placed upon examination of scholarly text, critical
thinking, independent study, and research."</p>
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