import { /* useContext, */ useState } from 'react'
import { useUser } from '../contexts/UserContext'
/* import UserContext from '../contexts/UserContext' */


const Profile = () => {
    const {user,setUser} = useUser()
    /* const { user, setUser } = useContext(UserContext); */
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "brkckr", bio: "webdev" })

            setLoading(false)
        }, 1500);
    }

    const handleLogout = () =>{
        setUser(null)
    }

    return (
        <div>
            {
                !user && (
                    <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
                )
            }

            <br />
            <br />
            {
                user !== null ? JSON.stringify(user) : 'Giriş Yapınız'
            }
            <br />
            <br />
            {
                user && (
                    <button onClick={handleLogout}>{loading ? "Loading..." : "Logout"}</button>
                )
            }
        </div>
    )
}

export default Profile