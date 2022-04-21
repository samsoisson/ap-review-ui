import { Link } from 'react-router-dom';
import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function ComputerScienceA() {
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
        <h1>Computer Science A</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <p>Computer Science Principles</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Students will learn advanced object-oriented programming using the Java programming language. The topics include data types,
functions, control structures, data structures, and the use of classes and files. Upon completion of this course, students will be
prepared to take the College Board Advanced Placement Computer Science A exam."</p>
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
  var course = "csa";
  const URL = `http://localhost:8080/courses/${course}`;
  var response = await axios.get(URL);
  console.log(response);
  return response;
}
