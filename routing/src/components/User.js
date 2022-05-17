import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState({});
    const { id } = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => setUser(res.data))
            .finally(()=>setLoading(false));
    }, [id])

    return (
        <div>
            <h2>User Details</h2>
            {loading && <div>Loading....</div>}
            <span>ID : <span style={{padding:"5px", backgroundColor:"#2E0249", borderRadius:"5px",color:"white"}}>{id}</span></span>
            <br />
            <br />
            <code>
                {
                    JSON.stringify(user)
                }
            </code>
            <br />
            <br />
            <Link to={`/users/${parseInt(id)+1}`}>Next User ({parseInt(id) +1})</Link>
        </div>
    )
}

export default User