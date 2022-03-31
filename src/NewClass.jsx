import react from "react";
import axios from 'axios'

function NewClass() {
    const [name, setName] = react.useState("");
    const [difficulty, setDifficulty] = react.useState("");
    const [teacher, setTeacher] = react.useState("");
    const [score, setScore] = react.useState(0);
    const [grade, setGrade] = react.useState("");
    const [hw, setHw] = react.useState("");


    function handleSubmit(e){
        e.preventDefault();
        console.log("event", e);
        saveClass(
            name,
            difficulty
        );
    }

    return(
        <>
            <h1>AP Review Form</h1>
            <h3>If you took a class last year or earlier, please only leave a review for that class if the teacher still works here.</h3>
            <form onSubmit={handleSubmit}>
                <label>Class Name: </label><br />
                <input type="radio" value={name} onChange={e => setName(e.target.value)}></input>
                <label>Biology</label><br />
                <input type="radio" value={name} onChange={e => setName(e.target.value)}></input>
                <label>Chemistry</label><br />
                <input type="radio" value={name} onChange={e => setName(e.target.value)}></input>
                <label>Calculus AB</label><br />
                <input type="radio" value={name} onChange={e => setName(e.target.value)}></input>
                <label>Calculus BC</label><br />
                <br />
                <label>Class difficulty: </label><br />
                <input type="radio" value={difficulty} onChange={e => setDifficulty(e.target.value)}></input>
                <label>Easy</label><br />
                <input type="radio" value={difficulty} onChange={e => setDifficulty(e.target.value)}></input>
                <label>Intermediate</label><br />
                <input type="radio" value={difficulty} onChange={e => setDifficulty(e.target.value)}></input>
                <label>Hard</label><br />
                <input type="radio" value={difficulty} onChange={e => setDifficulty(e.target.value)}></input>
                <label>The hardest class I've ever taken!</label><br />
                <br />
                <label>Teacher rating: </label><br />
                <input type="radio" value={teacher} onChange={e => setTeacher(e.target.value)}></input>
                <label>They teach every day and do it well!</label><br />
                <input type="radio" value={teacher} onChange={e => setTeacher(e.target.value)}></input>
                <label>They teach every day but do so poorly.</label><br />
                <input type="radio" value={teacher} onChange={e => setTeacher(e.target.value)}></input>
                <label>They teach half the time and do it well!</label><br />
                <input type="radio" value={teacher} onChange={e => setTeacher(e.target.value)}></input>
                <label>They teach half the time and do so poorly.</label><br />
                <input type="radio" value={teacher} onChange={e => setTeacher(e.target.value)}></input>
                <label>They don't usually teach, but the class is self-teachable.</label><br />
                <input type="radio" value={teacher} onChange={e => setTeacher(e.target.value)}></input>
                <label>They don't usually teach, and the class is difficult because of this!</label><br />
                <br />
                <label>AP test score: </label><br />
                <input type="radio" value={score} onChange={e => setScore(e.target.value)}></input>
                <label>1</label><br />
                <input type="radio" value={score} onChange={e => setScore(e.target.value)}></input>
                <label>2</label><br />
                <input type="radio" value={score} onChange={e => setScore(e.target.value)}></input>
                <label>3</label><br />
                <input type="radio" value={score} onChange={e => setScore(e.target.value)}></input>
                <label>4</label><br />
                <input type="radio" value={score} onChange={e => setScore(e.target.value)}></input>
                <label>5</label><br />
                {/* <input type="radio" value={score} onChange={e => setDifficulty(e.target.value)}></input>
                <label>I chose not to take the AP test</label><br /> */}
                <br />
                <label>Final grade in class: </label><br />
                <input type="radio" value={grade} onChange={e => setGrade(e.target.value)}></input>
                <label>F (0-69)</label><br />
                <input type="radio" value={grade} onChange={e => setGrade(e.target.value)}></input>
                <label>C (70-79)</label><br />
                <input type="radio" value={grade} onChange={e => setGrade(e.target.value)}></input>
                <label>B- (80-84)</label><br />
                <input type="radio" value={grade} onChange={e => setGrade(e.target.value)}></input>
                <label>B (85-89)</label><br />
                <input type="radio" value={grade} onChange={e => setGrade(e.target.value)}></input>
                <label>A- (90-94)</label><br />
                <input type="radio" value={grade} onChange={e => setGrade(e.target.value)}></input>
                <label>A (95-100)</label><br />
                <br />
                <label>Hours of homework per night: </label><br />
                <input type="radio" value={hw} onChange={e => setHw(e.target.value)}></input>
                <label>~0 hours</label><br />
                <input type="radio" value={hw} onChange={e => setHw(e.target.value)}></input>
                <label>less than 1 hour</label><br />
                <input type="radio" value={hw} onChange={e => setHw(e.target.value)}></input>
                <label>1-2 hours</label><br />
                <input type="radio" value={hw} onChange={e => setHw(e.target.value)}></input>
                <label>more than 2 hours</label><br />
                <br />
                
                <button>Submit</button>
                
            </form>
        </>
    )    
}


async function saveClass(name, difficulty)
{
  const URL = "http://localhost:8080/courses";
  try {
    var response = await axios.post(URL, {
        params: {
            name,
            difficulty
        }
    });
    console.log(response);
    return response;  
  } catch(error){
    console.error(error);
  }
}

export default NewClass;