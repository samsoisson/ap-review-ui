import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function Psychology() {
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
        <h1>Psychology</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This one-semester elective course is a study of the science of behavior and mental processes. Students will examine the full scope
of psychology, including its historical framework, methodologies, human development, sensation, perception, personality
development, cognition, learning, biological foundations, mental health, and social psychology. Coursework will include analysis
of contemporary perspectives in psychology, application of critical methods of inquiry, conflict resolution, and performancebased assessments utilizing problem-solving or decision-making processes."</p>
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
    var course = "psych";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
