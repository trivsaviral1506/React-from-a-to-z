import { useState , useEffect ,useMemo} from 'react'

import './App.css'

function App() {
  const [users,setUsers] = useState([
    { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Keyboard", price: 2000 },
  { id: 4, name: "Mouse", price: 1000 },
  { id: 5, name: "Monitor", price: 15000 }
  ])
  const [count ,setCount] = useState(0);
  const [search, setSearch] = useState("");
function handleChange(e){
  setSearch(e.target.value);
}
  const result = useMemo(()=>{
return users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()));
  },[search])

  return (
    <>
    <h1> Search: </h1>
    <input type="text" name="search" value={search} onChange={handleChange}></input>
   {result.map((user)=>(
    <div key = {user.id}>
      <h3> Name: {user.name} </h3>
      <h3> Price: {user.price} </h3>
      
    </div>
   ))}
    <h3> Count: {count}</h3>
    <button onClick ={()=>setCount(count+1)}>Increment</button>
    </>
  )
}

export default App
