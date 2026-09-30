import {useContext} from 'react';
import {UserContext} from './App';

 export function Profile(){

const {user,age,setAge} = useContext(UserContext);
 return (
<div>
    <h1> User Information</h1>
    <h3> Name: {user.name} </h3>
    <h3> age: {age} </h3>
    <h3> city: {user.city} </h3>
    <button onClick={()=>setAge(age+1)}>+</button>
 
</div>
 )
 }