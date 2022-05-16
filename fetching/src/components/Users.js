import { useEffect,useState } from 'react'

const Users = () => {

    const [users,setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(true)

    //fetch işlemleri - native fetch
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            //    setIsLoading(false);
            })
            .catch(e => console.log(e))
            .finally(()=>setIsLoading(false));
            //loading ibaresini jsona döndürdükten ve ekrana yazdıktan sonra da kullanılabilir fakat mantıklı olan hepsinden sonradır.
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div>}
            {
                users.map(user=>(
                    <div key={user.id}>{user.name}</div>
                ))
            }
        </div>
    )
}

export default Users