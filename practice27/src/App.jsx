import { createContext, useState } from 'react'
import './App.css'
import Profile from "./Profile";

export const userContext = createContext();
function App() {
  
  const user = {
    name: "Aviral",
    rollno: 13,
    age : 20
  }
  const [age,setage] = useState(age)
  return (
    
    <>
      <userContext.Provider value={user}>
        <Profile />
<button onClick={(setage{user.age+1})};
      </userContext.Provider>
    </>
  )
}

export default App
