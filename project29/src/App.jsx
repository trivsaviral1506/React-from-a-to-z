import {useState, createContext } from 'react'
import { Profile } from './Profile'
import './App.css'
const UserContext = createContext();



function App() {
 const [age,setAge] = useState(20);
const user = {
  name:"Aviral",
Age: {age},
  city: "Lakhimpur"
}
  return (
    <>
      <UserContext.Provider value={{user,age,setAge}}>

        <Profile />
      </UserContext.Provider>
    </>
  );
}

export default App;
// eslint-disable-next-line react-refresh/only-export-components
export { UserContext }

