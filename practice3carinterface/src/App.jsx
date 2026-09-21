import { useState } from 'react'

import './App.css'

function App() {
  const [searchText, setsearch] = useState("")
  function change(e){
    setsearch(e.target.value);
  }

  return (
    <>
      
      <input type="text" placeholder="type here" value={searchText}
      onChange={change} />
       
      <h2> you are searching for : {searchText}</h2>
    </>
  )
}

export default App
