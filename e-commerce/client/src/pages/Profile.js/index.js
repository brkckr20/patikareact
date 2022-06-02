import { Button } from '@chakra-ui/react';
import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Profile = ({history}) => {
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        logout(()=>{
            history.push("/");
        });
    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>
                <code>
                    {JSON.stringify(user)}
                </code>
            </h2>
            <br />
            <br />
            <Button colorScheme="telegram" onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Profile