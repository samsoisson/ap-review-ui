import { Link } from 'react-router-dom';
export default function Classes() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <Link to="/">Main Menu</Link>
        <h2>English</h2>
        <Link to="capstone">Capstone</Link><p></p>
        <Link to="english-lang">English Language</Link><p></p>
        <Link to="english-lit">English Literature</Link>
        <h2>Foreign Languages</h2>
        <Link to="chinese">Chinese</Link><p></p>
        <Link to="french">French</Link><p></p>
        <Link to="german">German</Link><p></p>
        <Link to="latin">Latin</Link><p></p>
        <Link to="spanish">Spanish</Link><p></p>
        <h2>Math</h2>
        <Link to="calc-ab">Calculus AB</Link><p></p>
        <Link to="calc-bc">Calculus BC</Link><p></p>
        <Link to="csa">Computer Science A</Link><p></p>
        <Link to="csp">Computer Science Principles</Link><p></p>
        <Link to="stats">Statistics</Link><p></p>
        <h2>Science</h2>
        <Link to="biology">Biology</Link><p></p>
        <Link to="chemistry">Chemistry</Link><p></p>
        <Link to="environmental">Environmental Science</Link><p></p>
        <Link to="music-theory">Music Theory</Link><p></p>
        <Link to="phys1">Physics 1</Link><p></p>
        <Link to="phys2">Physics 2</Link><p></p>
        <Link to="physc">Physics C</Link><p></p>
        <h2>Social Studies</h2>
        <Link to="european-history">European History</Link><p></p>
        <Link to="human-geo">Human Geography</Link><p></p>
        <Link to="macro">Macroeconomics</Link><p></p>
        <Link to="micro">Microeconomics</Link><p></p>
        <Link to="psych">Psychology</Link><p></p>
        <Link to="us-government">US Government</Link><p></p>
        <Link to="ush">US History</Link><p></p>
        <Link to="world">World History</Link><p></p>
      </main>

    );
  }
