import axios from "axios";

const getData = async (user_id) => {
    const { data:user } = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`) //kullanıcının id'ye göre çekilmesi işlemi
    const { data:post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`); //kullanıcının postlarının çekilmesi
    user.posts = [...post]; //kullanıcı ve ayrı ayrı yapılan isteklerin birleştirilmesi işlemi
    console.log(user);
}


export default getData //diğer modüllerde kullanılması için dışarı aktarılması işlemi