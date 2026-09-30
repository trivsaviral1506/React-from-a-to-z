import { useState , createContext} from 'react'

import './App.css'

export const userContext = createContext();
function App() {
  const[ age, setage] = useState(20);
  const user = {
    name: "aviral",
    age: 20,

  }
  return (
    <>
    <userContext.provider value={
      {
        age, setage, user
      }
    }>
      <Profile />
    </userContext.provider>
     
    </>
  )
}

export default App
