import { Link } from 'react-router-dom';import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function MusicTheory() {
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
        <h1>Music Theory</h1>
        <h2>Prerequisites:</h2>
        <p>Music reading ability</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"AP Music Theory is an advanced course for students who are considering a career in music. This course is a comprehensive
study of the materials of counterpoint and harmony. The study is made through listening and observation of the literature; lessons
in application include activities in musical writing and analysis. Advanced ear training, individual sight-reading, and the study
of musical harmony will be emphasized."</p>
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
    var course = "musictheory";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
