import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const { user } = useContext(UserContext)

    if (!user) {
        return <h1>Please login first</h1>
    }

    return (
        <div>
            Hello {user.username}
        </div>
    )
}

export default Profile