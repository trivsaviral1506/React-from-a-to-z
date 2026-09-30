import { useState ,useReducer } from 'react'

import './App.css'
function reducer(count,action){
return count + action.payload;
}
function App() {
     // const [count,setCount] = useState(0);
    const[count,dispatch] = useReducer(reducer,0);

  return (
    <>
    <h1> Count = {count}</h1>
<button onClick={()=>{dispatch({type:"increment",payload : -5})}}>-5</button>
<button onClick={()=>{dispatch({type:"decrement",payload:10})}}>+10</button>
<button onClick={()=>{dispatch(
  {
    type:"increment",
    payload: 5
  }
)

}
}
> +5 </button>
    </>
  )
}

export default App 
