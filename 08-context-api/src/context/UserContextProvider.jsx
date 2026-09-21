import React from 'react'
import UserContext from './UserContext'
const UserContextProvider = ({children}) =>{
   //state
    const [user, setUser] = React.useState(null)
return (
    //user context ke andr ki kaunsi value ka access de rhe hain vo mention krn apadega 
    <UserContext.Provider value={{user, setUser}}>
{children}
    </UserContext.Provider>
    
)
}
export default UserContextProvider
