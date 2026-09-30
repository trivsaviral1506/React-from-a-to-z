import { useState , useRef } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Aviral' },
    { id: 2, name: 'divy' },
    { id: 3, name: 'abhi' },
  ])
const count = useRef(4);
  function deleted(id){
    setUsers((prev)=>prev.filter((user)=>user.id!==id));
  }
  function Add(id){
    setUsers((prev)=>{
[...prev, {
  id
}]
    })
  }

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <button onClick={() => deleted(user.id)}>Delete</button>
          <h4> Enter your Name: </h4>
          <input type="text" name ="name" value={e.target.value}></input>
          <button onClick={() => Add()}>Add</button>
        </div>
      ))}
    </>
  )
}

export default App
