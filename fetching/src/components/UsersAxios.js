import { useEffect,useState } from 'react'
import axios from 'axios'

const UsersAxios = () => {

    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    //fetch işlemleri - native fetch
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data);
            //    setIsLoading(false);
            })
            .catch(e => console.log(e))
            .finally(()=>setIsLoading(false));
            //loading ibaresini jsona döndürdükten ve ekrana yazdıktan sonra da kullanılabilir fakat mantıklı olan hepsinden sonradır.
    }, []);
    return (
        <div>
            <h1>Users with Axios</h1>
            {isLoading && <div>Loading...</div>}
            {
                users.map(user=>(
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}

export default UsersAxios