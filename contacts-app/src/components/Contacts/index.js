import { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'

import './styles.css'

const Contacts = () => {

    const [contacts, setContacts] = useState([
        {
            fullname : "Burak",
            phone_number : 1234
        },
        {
            fullname : "aynur",
            phone_number : 43215
        }
    ]);

    useEffect(() => {
    //    console.log(contacts);
    }, [contacts])

    return (
        <div id='wrapper'>
            <h1>Contacts App</h1>
            <List contacts={contacts} />
            <Form contacts={contacts} setContacts={setContacts} />
        </div>
    )
}

export default Contacts