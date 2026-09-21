import { useState } from 'react'

import './App.css'

function App() {
 const [Formdata,setFormdata] = useState({
  name:"",
  email:"",
  age:"",
 })
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }))
  }
function print(e){
  e.preventDefault()
console.log(Formdata);
setFormdata({name:"",email:""});
}

  return (
    <>
    <h3> Name:{Formdata.name}</h3>
    <h3> email:{Formdata.email}</h3>
    <form onSubmit={print}>
      <input type="text" name="name" value={Formdata.name}
      onChange={handleChange} placeholder='enter your name here' />
      <input type="email" name="email" value={Formdata.email}
      onChange={handleChange} placeholder='enter your name here' />
      <button type="submit">Submit</button>
    </form>
      
    </>
  )
}

export default App
