import { Link } from 'react-router-dom';
import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function CalculusBC() {
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
        <h1>Calculus BC</h1>
        <h2>Prerequisites:</h2>
        <p>Calculus AB</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Calculus BC is a course designed by the College Board Advanced Placement Program and taught according to the standards
set forth by the College Board. AP Calculus BC is an extension of AP Calculus AB, rather than an enhancement; common topics
require a similar depth of understanding. In addition to the topics in AP Calculus AB, topics in AP Calculus BC will include, but
are not limited to, parametric, polar, and vector functions, their derivatives, integrals, and applications; differential equations;
additional antiderivative techniques; improper integrals; and sequences and series, and their approximations. This course
incorporates extensive use of technology."</p>
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
  var course = "calcbc";
  const URL = `http://localhost:8080/courses/${course}`;
  var response = await axios.get(URL);
  console.log(response);
  return response;
}
