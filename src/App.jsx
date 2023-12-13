import React,{ useState } from 'react';
import './App.css';

const Counter=()=> {

  const [counter,setCounter]=useState(0);
   
  const Increament=()=>{
  
    setCounter(counter+1)
    
  }
  const Decreament=()=>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("You Reached Zero Limit!")
      setCounter(0)
    } 
  }

  const setData=()=>{
    alert("refresh")
    localStorage.setItem("counter",counter)
  }

  return (
    <>
      <div className="container">
      <h4>React Counter</h4>
      <div className="box">
        <div className="numeric"><h1>{counter}</h1></div>
        <div className="btn">
        <button className="incre" onLoad={setData} onClick={()=>Increament()}>+  Increament</button>
        <button className="decre" onLoad={setData} onClick={()=>Decreament()}>-  Decreament</button>
        </div>
      </div>
      </div>
      </>
  );
}

export default Counter;
