import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function WorldHistory() {
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
    var course = "world";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
