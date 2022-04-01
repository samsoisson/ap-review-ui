import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
export default function GenericCourse() {
  const[courseData, setCourseData] = useState({})
  const URL_PARAM = "compsci";
  useEffect(() => {
    getCourseData(URL_PARAM).then(response => {
      setCourseData(response.data);
    })
  })
    return (

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
        <p>Class difficulty:</p>
        <p>Teacher rating:</p>
       
        <p>AP test score:</p>
        <p>Final grade in class:</p>
        <p>Hours of homework per night:</p>
        <h3><Link to="/classes">Back</Link></h3>
      </main>
   

    );
    
  }
  async function getCourseData(courseId){
    const URL = `http://localhost8080/courses/${courseId}`;
    var response = await = 
  }