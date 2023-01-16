import React, { useState,useEffect } from 'react'


function Component() {
  const [counter , setCounter] = useState(0);
  const [btndisabled , setBtnDisabled] = useState(true);
  
const increment =()=>{

  if (counter < 10 ) {
    setCounter(counter+1);
  } 
  if(counter === 10){ 
    setBtnDisabled(false)
   }   
  } ;
 
  const handlebutton = ()=>{
    setCounter(0);}
   
  
   const decrement = ()=>{
    if (counter <11 ) {
      setCounter(counter-1);
          }
       if (counter<1) 
       { setCounter(0);
        document.getElementById('msg').textContent = "Error : Counter cannot go below 0"}
   }

useEffect(() => {
   console.log(counter);

}, [counter])



  return (
    <div className='comp'>
    <p> Counter using React</p>
    Your current count is : {counter}
    
    <div id='msg'></div>
    <button onClick={decrement}>Decrement</button> &nbsp;&nbsp;
    <button onClick={increment}>Increment</button>&nbsp;&nbsp; 
    <button id='btn' onClick = {handlebutton} disabled={btndisabled} >Go Back to 0</button>
    </div>
  )
}

export default Component;