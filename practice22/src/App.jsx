import { useState  } from 'react'
import Child from './Components/Child';
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  
  const [name,setName] = useState("")
function handleChange(e){
setName(e.target.value);
}

  return (
    <>

<h1> Count: {count} </h1>
<button onClick={()=>setCount(count+1)}> Increment </button>
      Name: <input type="text" name="name" value={name} onChange={handleChange}></input>
      <Child name={name}/>

    </>
  )
}

export default App
