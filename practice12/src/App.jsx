import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
useEffect(()=>{
  const getUsers = async()=>{
const res =  await fetch("https://jsonplaceholder.typicode.com/users")
const output = await res.json();
setUsers(output);
}
getUsers();
},[])
  return (
    <>
  {users.map((user)=>(
    <div>
    <h2> Name: {user.name}</h2>
    <h3> Email: {user.email}</h3>
    </div>
  ))}
    </>
  )
}

export default App
