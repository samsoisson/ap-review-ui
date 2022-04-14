import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function French() {
    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 

         <main style={{ padding: "1rem 2" }}>
        <h1>French</h1>
        <h2>Prerequisites:</h2>
        <p>French III</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Students taking this course continue to study advanced French grammar and syntax in preparation for the College Board AP
French Language exam. They also read and discuss various pieces of French literature and other kinds of authentic materials."</p>
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