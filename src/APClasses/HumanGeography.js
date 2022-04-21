import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function HumanGeography() {
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
        <h1>Human Geography</h1>
        <h2>Prerequisites:</h2>
        <p>None</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"The Human Geography course is taught at a college-level and is for students who are prepared to take college level work. The
course introduces students to the systematic study of patterns and processes that have shaped human understanding, use, and
alteration of Earth’s surface. Students employ spatial concepts and landscape analysis to analyze human social organization and
its environmental consequences. They also learn the methods and tools geographers use in their science and practice. It is the
study of people from a spatial and ecological perspective. A college text will be utilized, and the emphasis is placed upon critical
thinking, independent study, and research."</p>
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
    var course = "humangeo";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
