import {  useRef } from 'react'

import './App.css'

function App() {
  const count  = useRef(0);
  function handleChange(){
    count.current = count.current + 1;
    console.log(count.current);
  } 
  
//   const obj = useRef(null);
// const [name,setName] = useState("");
// function handleChange(e){
//   setName(e.target.value);
// }
// function buttonChange(){
// obj.current.focus();
// }
  return (
    <>
    <h2> Ref Counter </h2>
    <h4 > Current value: {count.current} </h4>
    <button onClick={handleChange}> Increase </button>
      {/* <h1>  Input: </h1>
      <input type="text" ref = {obj} name="input" value={name} onChange={handleChange}></input>
      <button onClick={buttonChange}> Click </button>  */}
    
    </>
  )
}

export default App
