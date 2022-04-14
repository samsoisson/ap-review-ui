import { Link } from 'react-router-dom';

import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function Chinese() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>Chinese</h1>
        <h2>Prerequisites:</h2>
        <p>Chinese III</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This course places emphasis on using every element of the language in a culturally appropriate context. The course enables
students to acquire communication skills, learning strategies, critical thinking skills, understanding of appropriate elements in
culture, and knowledge of technology, rather than simply memorizing linguistic components. The AP Chinese course is also
designed to provide students with opportunities to further develop their Chinese proficiencies across the three communicative
modes: Interpersonal (speaking, listening, reading and writing skills), Interpretive (listening and reading skills), and
Presentational (speaking and writing skills). The course is taught entirely in Mandarin Chinese."</p>
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