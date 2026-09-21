import { useState } from 'react'


import './App.css'

function App() {
  const [Formdata,setFormdata] = useState({
    name:"",
    age:"",
    email:"",
    city:"",
  })
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormdata((prev)=>({
      ...prev,[name]:value
    }))
    }
function print(e){
  e.preventDefault();
  console.log(Formdata);
  setFormdata({
    name:"",
    age:"",
    email:"",
    city:"",
  })

}
  return (
    <>
     <form onSubmit={print}>
      <input name='name' value={Formdata.name} onChange={handleChange} />
      <input name='age' value={Formdata.age} onChange={handleChange} />
      <input name='email' value={Formdata.email} onChange={handleChange} />
      <input name='city' value={Formdata.city} onChange={handleChange} />
      <button type="submit"> Submit</button>
     </form>
    </>
  )
}
export default App
