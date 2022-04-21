import react from "react";
import axios from 'axios'
import {nameToId} from './CourseId';
import './App.css';
import Bar from './ButtonAppBar.js';
import Button from '@mui/material/Button';
function NewClass() {
    const [name, setName] = react.useState("");
    const [diff, setDifficulty] = react.useState("");
    const [teacher, setTeacher] = react.useState("");
    const [ap, setap] = react.useState(0);
    const [grade, setGrade] = react.useState("");
    const [hw, setHw] = react.useState("");


    function handleSubmit(e){
        e.preventDefault();
        console.log("event", e);
        saveClass(
            name,
            diff,
            teacher,
            ap,
            grade,
            hw
        );
    }
//***UPDATE THE OTHER PARAMETERS***
    return(
        <>
        <header>
        <header className="App">
          <Bar></Bar>
        </header>
      <header className="Classes"> 
            <h1>AP Review Form</h1>
            <h3>Answer the following questions to the best of your ability.</h3>
            <form onSubmit={handleSubmit}>
                <h3>Class Name: </h3>
                <label><input checked={name==="Biology"} type="radio" onClick={() => setName("Biology")}/>Biology</label><br />
                <label><input checked={name==="Calculus AB"} type="radio" onClick={() => setName("Calculus AB")}/>Calculus AB</label><br />
                <label><input checked={name==="Calculus BC"} type="radio" onClick={() => setName("Calculus BC")}/>Calculus BC</label><br />
                <label><input checked={name==="Capstone"} type="radio" onClick={() => setName("Capstone")}/>Capstone</label><br />
                <label><input checked={name==="Chemistry"} type="radio" onClick={() => setName("Chemistry")}/>Chemistry</label><br />
                <label><input checked={name==="Chinese"} type="radio" onClick={() => setName("Chinese")}/>Chinese</label><br />
                <label><input checked={name==="Computer Science A"} type="radio" onClick={() => setName("Computer Science A")}/>Computer Science A</label><br />
                <label><input checked={name==="Computer Science Principles"} type="radio" onClick={() => setName("Computer Science Principles")}/>Computer Science Principles</label><br />
                <label><input checked={name==="English Language"} type="radio" onClick={() => setName("English Language")}/>English Language and Composition</label><br />
                <label><input checked={name==="English Literature"} type="radio" onClick={() => setName("English Literature")}/>English Literature and Composition</label><br />
                <label><input checked={name==="Environmental Science"} type="radio" onClick={() => setName("Environmental Science")}/>Environmental Science</label><br />
                {/* <label><input checked={name==="European History"} type="radio" onClick={() => setName("European History")}/>European History</label><br /> */}
                <label><input checked={name==="French"} type="radio" onClick={() => setName("French")}/>French</label><br />
                <label><input checked={name==="German"} type="radio" onClick={() => setName("German")}/>German</label><br />
                <label><input checked={name==="Human Geography"} type="radio" onClick={() => setName("Human Geography")}/>Human Geography</label><br />
                <label><input checked={name==="Latin"} type="radio" onClick={() => setName("Latin")}/>Latin</label><br />
                <label><input checked={name==="Macroeconomics"} type="radio" onClick={() => setName("Macroeconomics")}/>Macroeconomics</label><br />
                <label><input checked={name==="Microeconomics"} type="radio" onClick={() => setName("Microeconomics")}/>Microeconomics</label><br />
                <label><input checked={name==="Music Theory"} type="radio" onClick={() => setName("Music Theory")}/>Music Theory</label><br />
                <label><input checked={name==="Physics 1"} type="radio" onClick={() => setName("Physics 1")}/>Physics 1</label><br />
                <label><input checked={name==="Physics 2"} type="radio" onClick={() => setName("Physics 2")}/>Physics 2</label><br />
                <label><input checked={name==="Physics C"} type="radio" onClick={() => setName("Physics C")}/>Physics C</label><br />
                <label><input checked={name==="Psychology"} type="radio" onClick={() => setName("Psychology")}/>Psychology</label><br />
                <label><input checked={name==="Spanish"} type="radio" onClick={() => setName("Spanish")}/>Spanish</label><br />
                <label><input checked={name==="Statistics"} type="radio" onClick={() => setName("Statistics")}/>Statistics</label><br />
                <label><input checked={name==="US Government"} type="radio" onClick={() => setName("US Government")}/>US Government</label><br />
                <label><input checked={name==="US History"} type="radio" onClick={() => setName("US History")}/>US History</label><br />
                <label><input checked={name==="World History"} type="radio" onClick={() => setName("World History")}/>World History</label><br />

                <br /><h3>Class difficulty: </h3>
                <label><input checked={diff==="Easy"} type="radio" onClick={() => setDifficulty("Easy")}/>Easy</label><br />
                <label><input checked={diff==="Intermediate"} type="radio" onClick={() => setDifficulty("Intermediate")}/>Intermediate</label><br />
                <label><input checked={diff==="Hard"} type="radio" onClick={() => setDifficulty("Hard")}/>Hard</label><br />
                <label><input checked={diff==="Hardest class"} type="radio" onClick={() => setDifficulty("Hardest class")}/>Hardest class I've ever taken!</label><br /><br/>

                <h3>Teacher rating: </h3>
                <label><input checked={teacher==="They teach every day and do it well!"} type="radio" onClick={() => setTeacher("They teach every day and do it well!")}/>They teach every day and do it well!</label><br />
                <label><input checked={teacher==="They teach every day but do so poorly."} type="radio" onClick={() => setTeacher("They teach every day but do so poorly.")}/>They teach every day but do so poorly.</label><br />
                <label><input checked={teacher==="They teach half the time and do it well!"} type="radio" onClick={() => setTeacher("They teach half the time and do it well!")}/>They teach half the time and do it well!</label><br />
                <label><input checked={teacher==="They teach half the time and do so poorly."} type="radio" onClick={() => setTeacher("They teach half the time and do so poorly.")}/>They teach half the time and do so poorly.</label><br />
                <label><input checked={teacher==="They don't usually teach, but the class is self-teachable."} type="radio" onClick={() => setTeacher("They don't usually teach, but the class is self-teachable.")}/>They don't usually teach, but the class is self-teachable.</label><br />
                <label><input checked={teacher==="They don't usually teach, and the class is difficult because of this!"} type="radio" onClick={() => setTeacher("They don't usually teach, and the class is difficult because of this!")}/>They don't usually teach, and the class is difficult because of this!</label><br />
                
                <br /><h3>AP test score: </h3>
                <label><input checked={ap===1} type="radio" onClick={() => setap(1)}/>1</label><br />
                <label><input checked={ap===2} type="radio" onClick={() => setap(2)}/>2</label><br />
                <label><input checked={ap===3} type="radio" onClick={() => setap(3)}/>3</label><br />
                <label><input checked={ap===4} type="radio" onClick={() => setap(4)}/>4</label><br />
                <label><input checked={ap===5} type="radio" onClick={() => setap(5)}/>5</label><br />
                {/* <label><input type="radio"/>I did not take the AP test.</label><br /> */}
               
                <br /><h3>Final grade in class: </h3>
                <label><input checked={grade==="A (95-100)"} type="radio" onClick={() => setGrade("A (95-100)")}/>A (95-100)</label><br />
                <label><input checked={grade==="A- (90-94)"} type="radio" onClick={() => setGrade("A- (90-94)")}/>A- (90-94)</label><br />
                <label><input checked={grade==="B (85-89)"} type="radio" onClick={() => setGrade("B (85-89)")}/>B (85-89)</label><br />
                <label><input checked={grade==="B- (80-84)"} type="radio" onClick={() => setGrade("B- (80-84)")}/>B- (80-84)</label><br />
                <label><input checked={grade==="C (70-79)"} type="radio" onClick={() => setGrade("C (70-79)")}/>C (70-79)</label><br />
                <label><input checked={grade==="F (0-69)"} type="radio" onClick={() => setGrade("F (0-69)")}/>F (0-69)</label><br />
               
                <br /> <h3>Hours of homework per night: </h3>
                <label><input checked={hw==="~0 hours"} type="radio" onClick={() => setHw("~0 hours")}/>~0 hours</label><br />
                <label><input checked={hw==="less than 1 hour"} type="radio" onClick={() => setHw("less than 1 hour")}/>less than 1 hour</label><br />
                <label><input checked={hw==="1-2 hours"} type="radio" onClick={() => setHw("1-2 hours")}/>1-2 hours</label><br />
                <label><input checked={hw==="more than 2 hours"} type="radio" onClick={() => setHw("more than 2 hours")}/>more than 2 hours</label><br /><br />
              
               
                <header className = ".App-buttons">
                  <a href="/" target="_blank">
                  <Button onClick={handleSubmit} variant="contained">Submit!</Button>
                  </a>
                
                </header>
            </form>
            </header>
      </header>
        </>
    )    
}


async function saveClass(name, diff,teacher,ap,grade,hw)
{
  var id = nameToId(name);
console.log("name",name);
console.log(diff);
let body={
    name,
    diff,
    teacher,
    ap,
    grade,
    hw,
    id
}
console.log(body);
  const URL = `http://localhost:8080/courses/${id}`;
  try {
    var response = await axios.put(URL, 
    body    
    );
    console.log(response);
    return response;  
  } catch(error){
    console.error(error);
  }
}

export default NewClass;