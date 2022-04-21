import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function PhysicsC() {
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
        <h1>Physics C: Calculus-based</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>Calculus concurrent enrollment or Calculus credit</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"The Advanced Placement Physics C (AP/GT) course is the first part of the college sequence that serves as the foundation in
physics for students majoring in the physical sciences or engineering. An equal emphasis in the course is on mechanics and on
electricity and magnetism, with the AP test separated for administration and grading into those two areas. Strong emphasis is
placed on solving challenging problems, some requiring calculus."</p>
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
    var course = "physicsc";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
