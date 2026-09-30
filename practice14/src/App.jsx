import { useState, useEffect} from 'react'

import './App.css'

function App() {
  const [posts, setPosts] =  useState([])
 const[error,setError] = useState(false);
 const [loading,setloading] = useState(true);
  useEffect(()=>{
const fetchdata = async()=>{
  try{
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
if(!res.ok){
  throw new Error("Something went wrong");
}
const data = await res.json();
setPosts(data);
  }
  catch{
setError(true)
  }
  finally{
setloading(false);
  }
}
 fetchdata()
 },[])
if(error){
  return <h2> Something went wrong</h2>
}
  return (
    <>

      {loading?<h1> page is loading</h1>:<div>
        
       <h1> Posts</h1>

        {posts.map((post)=>(
          <div key = {post.id}>
          <h1 > {post.title} </h1>
          <p> {post.body} </p>
          </div>
        )
        )
      }
        </div>
      }
      
    </>
  )
}

export default App
