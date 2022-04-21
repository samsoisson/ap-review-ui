import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function USHistory() {
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
        <h1>United States History</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <p>World Geography, World History, Human Geography, or World History (AP)</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP United States History is taught at the college-level and is for students who are prepared to take college level work. In addition
to covering the major aspects of United States history, the course extends the study in several ways. Since it is based on the
Advanced Placement model, this survey course covers American History from 1491 to contemporary times. Students study this
history through the analysis of historical sources, making connections, and formulating historical arguments around concepts
such as American and national identity; work, exchange, and technology; geography and the environment; migration and
settlement; politics and power; America in the world; American and regional culture; and social structures. A college text will
be utilized, and the emphasis is placed upon critical thinking, independent study, and research."</p>
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
    var course = "ushistory";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
