import { useState ,useEffect } from 'react'

import './App.css'

function App() {
  const [id, setid] = useState(1)
  const [posts,setPosts] = useState({});
  const [error,seterror] = useState("");
  const [loading ,setloading] = useState(true)
useEffect(()=>{
  const fetchdata = async()=>{
    try{
     
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   if(!res.ok){
        throw new Error("Something went wrong")
      }
      const data = await res.json();
  setPosts(data);
  }
  catch{
    seterror(true)
  }
  finally{
    setloading(false);
  }
  }
fetchdata()
},[id])
if(loading){
  return <h1> Page is loading</h1>
}
if(error){
  return <h1> Something went wrong </h1>
}
  return (
    <>
  <div>
    <h1> 
      {posts.id}

    </h1>
   <p> {posts.title} </p>
    
  </div>
 
  <button onClick={()=>{
    if(id>1){
      setid(id-1);
    }
  }}> Previous</button>
  <button onClick={()=>{
   
      setid(id+1);
    
  }}> Next</button>
    </>
  )
}

export default App
