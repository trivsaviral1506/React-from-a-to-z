import {useState} from 'react';

export function CarAvailability(){

//const [avail,setavail] = useState("Available")
//const [book,setbook] = useState("BOOK Now");

const [stat,setstat] = useState(true);//for available 
 function change(){
setstat(!stat);
 }



    return (
<>
{ (stat)?<><h1> car is available</h1>
<button onclick={change}> Book Now</button>
</>
: <><h1> car is unavailable</h1>
<button onclick={change}> Not Available</button></>
}


<button onClick={change}>Change Status</button>

</>


    )
}
