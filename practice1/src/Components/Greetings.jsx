import {useState} from 'react'
export function Greetings(){
    const [name,setName] = useState("Guest");
    function updation(){
        setName("Aviral");
    }
    return (
<>
<h1> Hello ,{name}</h1>
<button onClick={updation}> Change Name</button>
</>
    )
}
