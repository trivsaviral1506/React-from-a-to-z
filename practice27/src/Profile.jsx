import {useContext} from 'react';
import {userContext} from './App';

 export default function Profile(){
const user = useContext(userContext);
 return (
    <>
    <div> 
        <h2> {user.name}</h2>
        <h2> {user.rollno}</h2>
        <h2> {user.age}</h2>

    </div>
    <button onClick = {set}
    </>
 );
 
 }