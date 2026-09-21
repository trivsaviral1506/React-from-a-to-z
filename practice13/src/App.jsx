import { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
const fetchdata = async()=>{
  // fetch is used to make http request to server to give data
const res = await fetch("https://jsonplaceholder.typicode.com/posts");
const data = await res.json();
setPosts(data);
}
fetchdata();
},[])

  return (
    <>
     {posts.map((post)=><div key = {post.id}> 
      <h1> {post.title} </h1>
      <p> {post.body} </p>
     </div>

     )} 
    </>
  )
}

export default App
