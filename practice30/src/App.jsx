import { useState, createContext } from 'react'
import {Profile} from './Profile';
import './App.css'

const UserContext = createContext();



function App() {
  const [theme, setTheme] = useState('Light');
  const user = {
    name: 'Aviral',
    age: 20,
  };

  return (
    <>
      <UserContext.Provider value={{ user, theme, setTheme }}>
        <Profile />
      </UserContext.Provider>
    </>
  );
}
export default App;
// eslint-disable-next-line react-refresh/only-export-components
export {UserContext}
