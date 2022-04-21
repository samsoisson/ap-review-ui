import { Link } from 'react-router-dom';
import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function Statistics() {
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
        <h1>Statistics</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 11-12</p>
        <p>Algebra I, Geometry, or Algebra II</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Statistics is a course designed by the College Board Advanced Placement Program and taught according to the standards set
forth by the College Board. Topics in AP Statistics are divided into four major themes: exploratory analysis, planning a study,
probability, and statistical inference. Exploratory analysis of data makes use of graphical and numerical techniques to study
patterns and departures from patterns. Planning a study involves collecting data according to a well-developed plan, in order to
obtain valid information on a conjecture. Probability is the tool used for anticipating what the distribution of data should look
like under a given model. Statistical inference guides the selection of appropriate models. This course incorporates extensive use
of technology."</p>
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
    var course = "stats";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
