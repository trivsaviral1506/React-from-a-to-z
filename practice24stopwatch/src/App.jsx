import { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [stop,setStop] = useState(true);
 
  function handleChange1(){
setStop(false);
  }
function handleChange2(){
setStop(true);
}
useEffect(()=>{
  if(stop){
    return;
  }
  const timer = setInterval(()=>{
setCount(prev => prev+1);
  },1000);
  return ()=>{
    clearInterval(timer);
  };
}
,[stop]
)



  return (
    <>
     <h1> Count: {count} seconds</h1>
     <button onClick = {handleChange1}> Start </button>
     <button onClick= {handleChange2}> Stop </button>
     <button onClick = {()=>{setCount(0);setStop(true)}}> Reset </button> 
      
    </>
  )
}

export default App
