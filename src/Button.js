const Button = () =>{
const click=()=>{
    console.log('ok');
}
    // return ( <button style= {{backgroundColor:color}}
    return(
        
        <div className="button">
            <button onClick={click}>Explore</button>
        </div>
    );
    
       
      
}
export default Button