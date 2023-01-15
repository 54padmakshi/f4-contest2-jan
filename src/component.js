import React, { useState,useEffect } from 'react'

function Component() {
  const [counter , setCounter] = useState(0);
  console.log(counter);
const increment =()=>{

  if (counter < 10 ) {
    setCounter(counter+1);
  } 
  if (counter === 10){
    //display the button
      setCounter(0);
      
  }
  } ;
   const decrement = ()=>{
    if (counter <11) {
      setCounter(counter-1);
          }
         
   }

useEffect(() => {
   console.log(counter);

}, [counter])



  return (
    <div>
    <p> Counter using React</p>
    Your current count is : {counter}
    
    <div id='msg'></div>
    <button onClick={decrement}>Decrement</button> &nbsp;&nbsp;
    <button onClick={increment}>Increment</button>&nbsp;&nbsp; 
    <button id='btn' onClick = {increment}>Go Back to 0</button>
    </div>
  )
}

export default Component;