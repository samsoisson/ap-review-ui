import { Link } from 'react-router-dom';
import '../App.css';
import Bar from '../ButtonAppBar.js';
import axios from 'axios';
import React, {useState,useEffect} from "react";
export default function Capstone() {
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
        <h1>Capstone</h1>
        <h2>Prerequisites:</h2>
        <p>Grades 10-12 (Seminar)</p>
        <p>Grades 11-12 and Capstone Seminar (Research)</p>
        <h2>Course Description from 2022-2023 Educational Planning Guide:</h2>
        <h3>Capstone Seminar:</h3>
        <p>"In AP Seminar, students investigate real world issues from multiple perspectives, gathering and analyzing information from
various sources in order to develop credible and valid evidence-based arguments. AP Seminar is a foundational course that
engages students in cross-curricular conversations that explore the complexities of academic and real-world topics and issues by
analyzing divergent perspectives. Using an inquiry framework, students practice reading and analyzing articles, research studies,
and foundational literary and philosophical texts; listening to and viewing speeches, broadcasts and personal accounts; and
experiencing artistic works and performances. Students learn to synthesize information from multiple source, develop their own
perspectives in research-based written essays, and design and deliver oral and visual presentations, both individually and as part
of a team. Ultimately, the course aims to equip students with the power to analyze and evaluate information with accuracy and
precision in order to craft and communicate evidence-based arguments." </p>
        <h3>Capstone Research:</h3>
        <p>"In AP Research, students cultivate the skills and discipline necessary to conduct independent research and inquiry in order to
produce and defend their scholarly work. AP Research is designed to allow students to dive into an academic topic, problem, or
issue of individual interest. Students will further develop the skills acquired in the AP Seminar course by understanding research
methods; employing ethical research practices; and accessing, analyzing, and synthesizing information as they address a research
question. The course culminates in an academic paper of 4,000-5,000 words and a presentation with an oral defense during which
the student will answer questions about his or her academic paper." </p>

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
    var course = "capstone";
    const URL = `http://localhost:8080/courses/${course}`;
    var response = await axios.get(URL);
    console.log(response);
    return response;
  }
