import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Bar from './ButtonAppBar.js';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">  
      <Bar/>
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
      </header>
    <header className="App-desc">
          <h3>
            Learn which courses are right for you! The purpose of this website is to allow students to leave reviews of AP courses they have taken and recommend/advise against future students taking these courses.
          </h3>
      
            
         
          <h5>Requirements for leaving a review:</h5>
          <p>-must be a student or graduate of Clear Lake High School</p>
          <p>-must have taken the AP test and recieved a score</p>
          <p>-the teacher that taught the course must still be teaching at Clear Lake High School</p>
          {/* <img src={logo} className="Logo" alt="logo" width="180" height="180"/>   */} 
          <p></p><p></p><p></p><p></p>

          <header className="App-footer">
          <>This website was created by Sam Soisson in 2022 to experiment with website development and help incoming students decide which AP courses to take based on reviews left by previous students. Thank you for viewing the website and being a part of my coding journey!</>
          </header>
           <p></p>   
    </header>
    {/* <header className="App-header"></header> */}
  
        
    </div>    
  );
}
export default App;
