import {useContext ,useState} from 'react'
import {userContext} from './App';

export default function Profile (){

const {age,setage,user} = useContext(userContext);

return (
    <>
<div> 
    <h2> name : {user.name} </h2>
    <h2> age{user.age} </h2>
    
</div>

    </>

)
 }