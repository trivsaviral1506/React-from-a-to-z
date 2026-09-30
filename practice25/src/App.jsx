import { useReducer } from 'react'

import './App.css'

function reducer(user,action){
  if(action.type=="nameChange"){
    return {
      ...user, name: action.payload
    };
  }
  if(action.type=="ageChange"){
    
    return {
      ...user, age: action.payload
    };
  }
  if(action.type=="cityChange"){
    return {
      ...user, city:action.payload
    };
  }
  if(action.type=="reset"){
    return {
      name:"",
      age:0,
      city:""
    };
  }

}
function App() {
  
const [user,dispatch] = useReducer(reducer,{ name: "Aviral",
    age:20,
    city: "Delhi"})

  return (
    <>
    <h1> {user.name} </h1>
    <h1> {user.age} </h1>
    <h1> {user.city} </h1>
    
     <button onClick= {()=>
      dispatch({
        type:"nameChange",
        payload: "Rahul"})}> ChangeName </button>
     
     <button onClick ={
      ()=>dispatch({
type: "ageChange",
payload: user.age+1
      })
}> IncreaseAge </button>
     <button onClick ={
      ()=>dispatch({
type: "cityChange",
payload: "Mumbai"
      })
}> ChangeCity </button>
     <button onClick = {()=>dispatch({
      type: "reset"
     })}> ChangeCity </button>
    </>
  )
}

export default App
