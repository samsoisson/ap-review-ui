import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function Microeconomics() {
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
        <h1>Microeconomics</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>US History</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"This is a one-semester college-level economics course for students who wish to take a challenging course in microeconomics.
The focus of the course is on the behavior of the individual decision-makers and firms in a free enterprise system. Topics covered
include the basis economic concepts, supply and demand, production decisions, price theory, and the functions of the product
market. This course emphasizes critical-thinking skills, logic, and requires substantial out-of-class independent study. A college
text will be utilized, and the emphasis will be on applying economic models, data analysis, critical thinking, independent study
& research."</p>
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
    var course = "micro";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
