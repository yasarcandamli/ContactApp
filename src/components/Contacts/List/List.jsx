import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        );
    });

    console.log("filtered", filtered);


    return (
        <div className='List'>
            <input
                placeholder='Filter Contact'
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <ul>
                {filtered.map((contact, index) => (
                    <li key={index}>
                        <span>{contact.full_name}</span>
                        <span>{contact.phone_number}</span>
                    </li>
                ))}
            </ul>

            <p>Contacts: ({filtered.length})</p>
        </div>
    )
}

export default List
