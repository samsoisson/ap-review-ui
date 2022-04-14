import { Link } from 'react-router-dom';
import axios from 'axios';
import React, {useState,useEffect} from "react";
import '../App.css';
import Bar from '../ButtonAppBar.js';
export default function Biology() {
  const [courseData,setCourseData]=useState({});
  useEffect(()=> {
    getBiology().then(response=>{
      setCourseData(response.data);
   })
  console.log("page loaded");
  },[])
   //var data = {"name":"Biology","id":"123abc","hoursOfHomework":2.2};
  

    return (
      <header>
      <header className="App">
        <Bar></Bar>
      </header>
    <header className="Classes"> 
         <main style={{ padding: "1rem 2" }}>
        <h1>Biology</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12</p>
        <p>Biology and Chemistry</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <p>"Advanced Placement Biology (AP/GT) offers students advanced study in the concepts of biology. Laboratory techniques are
developed to further the student’s ability to pursue a career in a biologically related field. Advanced laboratory investigations of
chemical reactions that occur in organisms (e.g., enzymes, Krebs cycle, protein synthesis, cell replication and specialization) are
presented. Biological systems of plants and animals are investigated. Animal dissection is a required part of the curriculum in
this course."</p>
        <h2>Student reviews:</h2>
        <p>Class difficulty:</p>
        <p>Teacher rating:</p>        
        <p>AP test score:</p>
        <p>Final grade in class:</p>
        <p>Hours of homework per night: {courseData.hoursOfHomework}</p>
        <h3><Link to="/classes">Back</Link></h3>
        
       
      </main>
      <p></p>
      </header>
      </header>

    );
  }

  async function getBiology()
  {
    const URL = "http://localhost:8080/courses/0";
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }