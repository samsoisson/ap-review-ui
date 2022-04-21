import { Link } from 'react-router-dom';
import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function Spanish() {
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
        <h1>Spanish</h1>
        <h2>Prerequisites:</h2>
        <p>Spanish III</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"By using the four basic skills acquired in earlier courses, students in this class closely examine the Spanish language grammatical
structure and vocabulary. Readings from Spanish literature provide opportunities for cognitive thinking and group discussion,
and students develop their abilities in both oral and written expression. The focus in this course is a concentration on the use of
formal literary style and idiomatic terminology."</p>
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
    var course = "spanish";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
