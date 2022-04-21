import { Link } from 'react-router-dom';
import axios from 'axios';
import React, {useState,useEffect} from "react";
import '../App.css';
import Bar from '../ButtonAppBar.js';

export default function Chinese() {
  const [courseData,setCourseData]=useState({});
  useEffect(()=> {
    getClass().then(response=>{
      console.log("response.data",response.data);
      setCourseData(response.data);
   })
  console.log("page loaded");
  },[])

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
        <p>Class difficulty: {courseData.diff}</p>
        <p>Teacher rating: {courseData.teacher}</p>
        
        <p>AP test score: {courseData.ap}</p>
        <p>Final grade in class: {courseData.grade}</p>
        <p>Hours of homework per night: {courseData.hw}</p>
        <h3><Link to="/classes">Back</Link></h3>
      </main>
      <p></p><p></p><p></p>
      </header>
      </header>

    );
  }
  
async function getClass()
{
  var course = "chinese";
  const URL = `http://localhost:8080/courses/${course}`;
  var response = await axios.get(URL);
  console.log(response);
  return response;
}

