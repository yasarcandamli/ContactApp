import { useEffect, useState } from 'react'
import List from './List/List'
import Form from './Form/Form'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            full_name: 'Yaşar Can',
            phone_number: '6541331513'
        },
        {
            full_name: 'Emin',
            phone_number: '8716416331'
        },
        {
            full_name: 'Muhammed',
            phone_number: '2165131546'
        },
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div className='Contacts'>
            <h1><span className="material-symbols-outlined">
                contact_page
            </span> Contact App</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
