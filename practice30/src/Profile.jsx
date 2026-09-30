
import {useContext} from 'react'
import { UserContext } from './App'
 export function Profile(){
const {user,theme,setTheme} = useContext(UserContext);
function Change(){
    if(theme==="Light"){
        setTheme("dark");
    }
    else{
        setTheme("Light");
    }
}
return (
<>

<h3> 
    {user.name}
</h3>
<h3> 
    {user.age}
</h3>
<button onClick={()=>Change()}>Click</button>
<h4>Theme: {theme} </h4>
</>
)
 }